"use client";

import { motion } from "framer-motion";

const voices = [
  {
    key: "「これでいいんだ」と思えた",
    quote:
      "自分が抱えていたモヤモヤを、否定せずそのまま受け止めてもらえたことで、初めて「これでいいんだ」と思えました。答えを教えてもらうのではなく、自分の中にあった答えに気づかせてもらった感覚です。",
    attr: "— 30代 NPOスタッフ",
  },
  {
    key: "本当に大切にしたいことが整理できた",
    quote:
      "組織の課題について、誰にも相談できず一人で抱え込んでいました。萩原さんとの対話を通じて、自分が本当に大切にしたいことが整理でき、チームへの伝え方も変わりました。",
    attr: "— 40代 福祉施設管理職",
  },
];

export default function Voice() {
  return (
    <section id="voice" className="bg-[#E6EBF4] px-5 md:px-8 py-16 md:py-[100px]">
      <div className="text-center mb-14">
        <span className="font-[family-name:var(--font-inter)] text-xs font-medium tracking-[0.15em] uppercase text-[#5A7FA3]">
          Voice
        </span>
        <h2 className="font-[family-name:var(--font-shippori)] text-[1.6rem] font-semibold leading-[2.1] tracking-[0.06em] text-[#2C4A6E] mt-3">
          伴走を受けた方の声
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1080px] mx-auto">
        {voices.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-white rounded-2xl p-7 md:p-10 shadow-[0_2px_12px_rgba(44,74,110,0.06)] border-l-[3px] border-[#2C4A6E] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(44,74,110,0.12)] transition"
          >
            <p className="font-[family-name:var(--font-shippori)] text-[1.1rem] md:text-[1.3rem] text-[#2C4A6E] mb-1">
              <span className="border-b-2 border-[rgba(44,74,110,0.2)] pb-0.5 inline">
                {v.key}
              </span>
            </p>
            <blockquote className="text-[0.92rem] leading-[2.1] text-[#444] mt-4">
              {v.quote}
            </blockquote>
            <p className="mt-5 pt-3.5 border-t border-[rgba(44,74,110,0.06)] text-[0.78rem] text-[#777]">
              {v.attr}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
