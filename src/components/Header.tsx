"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "メッセージ", href: "#message" },
  { label: "大切にしていること", href: "#promise" },
  { label: "こんな方へ", href: "#target" },
  { label: "サービス", href: "#menu" },
  { label: "お客様の声", href: "#voice" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div className="max-w-[1080px] mx-auto flex items-center justify-between px-[32px] py-[14px]">
        {/* Logo */}
        <a
          href="#"
          className="font-[family-name:var(--font-inter)] text-[1.05rem] font-medium tracking-[0.2em] text-[#222] no-underline"
        >
          JUNTO
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.82rem] text-[#444] hover:text-[#2C4A6E] transition no-underline"
            >
              {item.label}
            </a>
          ))}

          {/* CTA Button */}
          <a
            href="#contact"
            className="inline-block px-[22px] py-[10px] rounded-[10px] bg-[rgba(44,74,110,0.07)] text-[#2C4A6E] text-[0.8rem] font-medium hover:bg-[rgba(44,74,110,0.14)] transition no-underline"
          >
            無料面談を予約
          </a>
        </nav>
      </div>
    </header>
  );
}
