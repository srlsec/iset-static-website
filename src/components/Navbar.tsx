'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks: { href: string; label: string }[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/curriculum', label: 'Curriculum' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/history', label: 'History' },
  { href: '/question-bank', label: 'Question Bank' },
];

const REGISTER_URL = 'https://iameonline.com/login/index';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const asideRef = useRef<HTMLElement>(null);

  const closeMenu = useCallback((returnFocus = true) => {
    const activeElement = document.activeElement;
    if (activeElement instanceof HTMLElement && asideRef.current?.contains(activeElement)) {
      activeElement.blur();
    }

    setMenuOpen(false);

    if (returnFocus) {
      requestAnimationFrame(() => {
        menuButtonRef.current?.focus({ preventScroll: true });
      });
    }
  }, []);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1140px)');
    const handleChange = () => {
      if (mediaQuery.matches) setMenuOpen(false);
    };

    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const firstFocusable = asideRef.current?.querySelector<HTMLElement>('a[href], button:not([disabled])');
    firstFocusable?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu(true);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen, closeMenu]);

  const isActive = (href: string): boolean => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const linkClassName = (href: string) =>
    `block text-sm font-medium transition-colors duration-250 px-6 py-3 hover:text-sky ${
      isActive(href) ? 'text-sky font-semibold' : 'text-text'
    }`;

  return (
    <>
      <nav
        className="sticky top-0 z-[1002] bg-white border-b border-border shadow-nav"
        onClick={() => {
          if (menuOpen) closeMenu(true);
        }}
      >
        <div className="flex items-center justify-between py-3.5 px-6 max-w-[1140px] mx-auto relative">
          <Link href="/" className="flex items-center" onClick={(event) => event.stopPropagation()}>
            <Image
              src="/iset-logo.png"
              alt="iSET — International Skill Enhancement Training"
              width={160}
              height={64}
              className="shrink-0"
              style={{ height: '3rem', width: 'auto' }}
              priority
            />
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            className="nav:hidden flex items-center justify-center w-10 h-10 cursor-pointer bg-transparent border-none p-1 text-navy"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={(event) => {
              event.stopPropagation();
              if (menuOpen) closeMenu(true);
              else openMenu();
            }}
          >
            {menuOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>

          <ul className="hidden nav:flex gap-7 items-center list-none m-0 p-0">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors duration-250 hover:text-sky ${
                    isActive(href) ? 'text-sky font-semibold' : 'text-text'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-navy !text-white px-5 py-2.5 rounded-full text-[0.85rem] !font-medium hover:!bg-sky hover:!text-white transition-colors duration-250"
              >
                Register Now
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="nav:hidden fixed inset-0 z-[1100] bg-black/40"
          onClick={() => closeMenu(true)}
          aria-hidden="true"
        />
      )}

      <aside
        ref={asideRef}
        id={menuId}
        inert={!menuOpen || undefined}
        {...(menuOpen
          ? { role: 'dialog' as const, 'aria-modal': true as const, 'aria-label': 'Navigation menu' }
          : {})}
        className={`nav:hidden fixed top-0 left-0 h-full w-[min(320px,85vw)] bg-white z-[1101] shadow-xl transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full pointer-events-none'
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <span className="font-display text-[1rem] font-semibold text-navy">Menu</span>
          <button
            type="button"
            onClick={() => closeMenu(true)}
            className="flex items-center justify-center w-10 h-10 cursor-pointer bg-transparent border-none p-1 text-navy"
            aria-label="Close menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col list-none py-2 pb-6">
          {navLinks.map(({ href, label }) => (
            <li key={href} className="border-b border-border">
              <Link href={href} className={linkClassName(href)} onClick={() => closeMenu(false)}>
                {label}
              </Link>
            </li>
          ))}
          <li className="px-6 pt-4">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-navy !text-white px-5 py-2.5 rounded-full text-[0.85rem] !font-medium hover:!bg-sky hover:!text-white transition-colors duration-250"
              onClick={() => closeMenu(false)}
            >
              Register Now
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
