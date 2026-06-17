import { useEffect, useState } from "react";

import { navigationItems } from "../../data/navigation";
import { siteCopy } from "../../data/translations";

type Props = {
  lang: "en" | "bg";
  pathname: string;
};

export default function MobileMenu({ lang, pathname }: Props) {
  const [open, setOpen] = useState(false);
  const [rendered, setRendered] = useState(false);
  const copy = siteCopy[lang];

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    setOpen(false);
    setRendered(false);
  }, [lang, pathname]);

  useEffect(() => {
    if (open) {
      setRendered(true);
      document.body.style.overflow = "hidden";

      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          closeMenu();
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
        onClick={() => setOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center text-[#17120f]"
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
          className={`fixed inset-0 z-50 bg-black/20 backdrop-blur-sm ${
            open ? "animate-[fade-in_220ms_ease-out]" : "animate-[fade-out_220ms_ease-in_forwards]"
          }`}
          onClick={closeMenu}
        >
          <div
            id="mobile-menu-panel"
            className={`flex min-h-svh w-full flex-col bg-[#f8f4ec] px-6 pb-10 pt-6 text-[#17120f] ${
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
                <p className="font-display text-[1.75rem] font-semibold tracking-[0.02em] text-[#17120f] animate-[hero-rise_360ms_cubic-bezier(0.22,1,0.36,1)] sm:text-[1.95rem]">
                  {copy.brand}
                </p>
              </div>
              <button
                type="button"
                onClick={closeMenu}
                className="inline-flex h-11 w-11 items-center justify-center text-[#17120f] animate-[hero-rise_360ms_cubic-bezier(0.22,1,0.36,1)]"
                aria-label={lang === "en" ? "Close menu" : "Затвори меню"}
              >
                <span className="text-[1.75rem] leading-none">×</span>
              </button>
            </div>

            <nav
              className="mt-8 flex flex-1 flex-col border-t border-black/10 pt-8"
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
                    className={`border-b border-black/10 py-4 text-[0.78rem] uppercase tracking-[0.22em] animate-[hero-rise_420ms_cubic-bezier(0.22,1,0.36,1)] ${
                      active ? "text-[#17120f]" : "text-[rgba(23,18,15,0.58)]"
                    }`}
                    style={{ animationDelay: `${80 + navigationItems.indexOf(item) * 40}ms`, animationFillMode: "both" }}
                    aria-current={active ? "page" : undefined}
                  >
                    {label}
                  </a>
                );
              })}
            </nav>

            <div className="space-y-3 border-t border-black/10 pt-6">
              <a
                href={alternatePath}
                onClick={closeMenu}
                className="inline-flex text-[0.78rem] uppercase tracking-[0.22em] text-[rgba(23,18,15,0.58)] underline-offset-4 hover:text-[#17120f] hover:underline animate-[hero-rise_420ms_cubic-bezier(0.22,1,0.36,1)]"
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
