'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const items = [
  ['HOME', '/'],
  ['STORY', '/story'],
  ['FRIENDS', '/friends'],
  ['GOODS', '/goods'],
  ['POP-UP', '/popup'],
  ['OCEAN PROJECT', '/ocean'],
  ['NEWS', '/news'],
] as const;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <Link className="logo" href="/">
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            어푸어푸<span style={{ padding: '0 7px' }}>프렌즈</span>
          </div>
        </Link>
        <nav className={`nav ${open ? 'mobileOpen' : ''}`}>
          {items.map(([label, href]) => (
            <Link
              key={href}
              className={pathname === href ? 'active' : ''}
              href={href}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="headerActions">
          <button className="iconBtn" aria-label="검색">
            ⌕
          </button>
          <button className="iconBtn" aria-label="장바구니">
            🛒
          </button>
        </div>
        <button
          className="menuBtn"
          aria-label="메뉴"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}
