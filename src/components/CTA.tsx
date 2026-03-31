"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="bg-[#E6EBF4] px-5 md:px-8 py-16 md:py-[100px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="bg-white max-w-[640px] mx-auto rounded-[20px] p-8 md:p-14 shadow-[0_16px_48px_rgba(44,74,110,0.12)] hover:-translate-y-1 hover:shadow-[0_20px_56px_rgba(44,74,110,0.18)] transition"
      >
        <span className="font-[family-name:var(--font-inter)] text-xs font-medium tracking-[0.15em] uppercase text-[#5A7FA3] mb-4 block">
          Contact
        </span>
        <h2 className="font-[family-name:var(--font-shippori)] text-[1.3rem] md:text-[1.6rem] font-semibold leading-[2.1] tracking-[0.06em] text-[#2C4A6E] mb-5 whitespace-pre-line">
          {"ひとりで抱えず、\n少しだけ荷物を\n下ろしてみませんか。"}
        </h2>
        <p className="text-[0.92rem] leading-[2.1] text-[#444] mb-9">
          僕も、たくさんの人に支えられて今ここにいます。弱いままでいい。不器用でいい。あなたのその「優しさ」を消してしまわないために、僕と一緒に、対話をさせてください。
        </p>
        <a
          href="https://forms.gle/LPaBEpPTGZg4k4Lq7"
          target="_blank"
          className="w-full bg-[#2C4A6E] text-white text-center py-[18px] rounded-xl text-[0.95rem] font-medium shadow-[0_4px_16px_rgba(44,74,110,0.25)] hover:bg-[#1E3A5C] transition block"
        >
          無料事前面談に申し込む →
        </a>
        <p className="mt-3.5 text-[0.78rem] text-[#777] text-center">
          30分のオンライン面談・費用はかかりません
        </p>
      </motion.div>
    </section>
  );
}
