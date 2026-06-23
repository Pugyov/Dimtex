import { useEffect, useRef, useState } from "react";

import { navigationItems } from "../../data/navigation";
import { siteCopy } from "../../data/translations";

type Props = {
  lang: "en" | "bg";
  pathname: string;
};

export default function MobileMenu({ lang, pathname }: Props) {
  const [open, setOpen] = useState(false);
  const [rendered, setRendered] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);
  const copy = siteCopy[lang];
  const logoPath = "/images/DimtexLogos/DimtexLogo_Full.png";

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    setOpen(false);
    setRendered(false);
  }, [lang, pathname]);

  useEffect(() => {
    if (open) {
      setRendered(true);
      document.body.style.overflow = "hidden";
      previouslyFocusedElementRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;

      window.requestAnimationFrame(() => {
        closeButtonRef.current?.focus();
      });

      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          event.preventDefault();
          closeMenu();
          return;
        }

        if (event.key !== "Tab" || !menuPanelRef.current) {
          return;
        }

        const focusableElements = Array.from(
          menuPanelRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        ).filter((element) => !element.hasAttribute("disabled") && element.tabIndex !== -1);

        if (!focusableElements.length) {
          event.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      };

      window.addEventListener("keydown", onKeyDown);

      return () => {
        document.body.style.removeProperty("overflow");
        window.removeEventListener("keydown", onKeyDown);
      };
    }

    if (!rendered) {
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.removeProperty("overflow");
    const timeoutId = window.setTimeout(() => setRendered(false), 240);
    const elementToRestore = previouslyFocusedElementRef.current ?? triggerButtonRef.current;
    elementToRestore?.focus();
    previouslyFocusedElementRef.current = null;

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [open, rendered]);

  const alternatePath =
    lang === "en"
      ? pathname === "/"
        ? "/bg"
        : `/bg${pathname.replace(/\/$/, "")}`
      : pathname === "/bg"
        ? "/"
        : pathname.replace(/^\/bg/, "").replace(/\/$/, "") || "/";

  return (
    <>
      <button
        type="button"
        ref={triggerButtonRef}
        onClick={() => setOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center [color:var(--text-on-dark)]"
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        aria-label={lang === "en" ? "Open menu" : "Отвори меню"}
      >
        <span className="sr-only">{lang === "en" ? "Open menu" : "Отвори меню"}</span>
        <div className="space-y-1.5">
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
        </div>
      </button>

      {rendered && (
        <div
          className={`fixed inset-0 z-50 bg-black/30 backdrop-blur-sm ${
            open ? "animate-[fade-in_220ms_ease-out]" : "animate-[fade-out_220ms_ease-in_forwards]"
          }`}
          onClick={closeMenu}
        >
          <div
            id="mobile-menu-panel"
            ref={menuPanelRef}
            className={`flex min-h-svh w-full flex-col bg-[#232a22] px-6 pb-10 pt-6 [color:var(--text-on-dark)] ${
              open
                ? "animate-[menu-rise_260ms_cubic-bezier(0.22,1,0.36,1)]"
                : "animate-[menu-fall_220ms_cubic-bezier(0.55,0.085,0.68,0.53)_forwards]"
            }`}
            role="dialog"
            aria-modal="true"
            aria-label={lang === "en" ? "Mobile navigation" : "Мобилна навигация"}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div>
                <img src={logoPath} alt={copy.brand} className="mobile-menu-logo animate-[hero-rise_360ms_cubic-bezier(0.22,1,0.36,1)]" width="1536" height="1024" />
              </div>
              <button
                type="button"
                ref={closeButtonRef}
                onClick={closeMenu}
                className="inline-flex h-11 w-11 items-center justify-center [color:var(--text-on-dark)] animate-[hero-rise_360ms_cubic-bezier(0.22,1,0.36,1)]"
                aria-label={lang === "en" ? "Close menu" : "Затвори меню"}
              >
                <span className="text-[1.75rem] leading-none">×</span>
              </button>
            </div>

            <nav
              className="mt-8 flex flex-1 flex-col border-t border-white/12 pt-8"
              aria-label={lang === "en" ? "Mobile menu links" : "Мобилни връзки"}
            >
              {navigationItems.map((item) => {
                const href = lang === "en" ? item.path : item.bgPath;
                const active = pathname === href || (item.key === "home" && pathname === (lang === "en" ? "/" : "/bg"));
                const label = item.key === "contact" ? copy.actions.contact : copy.nav[item.key];

                return (
                  <a
                    key={item.key}
                    href={href}
                    onClick={closeMenu}
                    className={`border-b border-white/12 py-4 text-[0.78rem] uppercase tracking-[0.22em] animate-[hero-rise_420ms_cubic-bezier(0.22,1,0.36,1)] ${
                      active ? "text-[#c8843e]" : "[color:var(--text-on-dark-subtle)]"
                    }`}
                    style={{ animationDelay: `${80 + navigationItems.indexOf(item) * 40}ms`, animationFillMode: "both" }}
                    aria-current={active ? "page" : undefined}
                  >
                    {label}
                  </a>
                );
              })}
            </nav>

            <div className="space-y-3 border-t border-white/12 pt-6">
              <a
                href={alternatePath}
                onClick={closeMenu}
                className="inline-flex text-[0.78rem] uppercase tracking-[0.22em] [color:var(--text-on-dark-subtle)] underline-offset-4 hover:[color:var(--text-on-dark)] hover:underline animate-[hero-rise_420ms_cubic-bezier(0.22,1,0.36,1)]"
                style={{ animationDelay: "240ms", animationFillMode: "both" }}
              >
                {copy.otherLocaleName}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
