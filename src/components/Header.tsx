"use client";

import { useState } from "react";

const navItems = [
  { label: "メッセージ", href: "#message" },
  { label: "大切にしていること", href: "#promise" },
  { label: "こんな方へ", href: "#target" },
  { label: "サービス", href: "#menu" },
  { label: "プロフィール", href: "#profile" },
  { label: "お客様の声", href: "#voice" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50"
      style={{
        backgroundColor: "rgba(248, 249, 252, 0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(44, 74, 110, 0.06)",
      }}
    >
      <div className="max-w-[1080px] mx-auto flex items-center justify-between px-5 md:px-[32px] py-[14px]">
        {/* Logo */}
        <a
          href="#"
          className="font-[family-name:var(--font-inter)] text-[1.05rem] font-medium tracking-[0.2em] text-[#222] no-underline"
        >
          JUNTO
        </a>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span className={`block w-5 h-[2px] bg-[#2C4A6E] transition-transform ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-[2px] bg-[#2C4A6E] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[2px] bg-[#2C4A6E] transition-transform ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>

        {/* Navigation (desktop) */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.82rem] text-[#444] hover:text-[#2C4A6E] transition no-underline"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-block px-[22px] py-[10px] rounded-[10px] bg-[rgba(44,74,110,0.07)] text-[#2C4A6E] text-[0.8rem] font-medium hover:bg-[rgba(44,74,110,0.14)] transition no-underline"
          >
            無料面談を予約
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-[rgba(44,74,110,0.06)] bg-[rgba(248,249,252,0.98)] px-5 pb-5 pt-3">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.9rem] text-[#444] hover:text-[#2C4A6E] transition no-underline py-1"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 block text-center px-[22px] py-[12px] rounded-[10px] bg-[#2C4A6E] text-white text-[0.85rem] font-medium no-underline"
              onClick={() => setMenuOpen(false)}
            >
              無料面談を予約
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
