"use client";

import { motion } from "framer-motion";

const cards = [
  {
    number: "01",
    english: "WAIT & HOLD",
    title: "急かしません",
    description:
      "すぐに結論が見つからなくても大丈夫です。「言葉になる前の違和感」を大切にしましょう。モヤモヤを急いで片づけず、まずはそのまま受け止めます。",
  },
  {
    number: "02",
    english: "ACCEPTANCE",
    title: "否定しません",
    description:
      "弱音も迷いも、今のあなたを形作る大切な要素として扱います。「強くあるべき」という枠組みで評価することはありません。",
  },
  {
    number: "03",
    english: "DISCOVERY",
    title: "一緒に「次の一歩」を探します",
    description:
      "対話を通じて少し違う角度から光を当て、「どこにエネルギーが湧くのか」を共に見つけ、新しい選択肢を広げます。",
  },
  {
    number: "04",
    english: "INTEGRITY",
    title: "誠実に向き合います",
    description:
      "僕は完璧な人間ではありませんが、あなたに対して常に誠実でありたいと思っています。あなたの人生に敬意を持って向き合います。",
  },
];

export default function Promise() {
  return (
    <section id="promise" className="bg-[#F8F9FC] py-16 md:py-[100px] px-5 md:px-8">
      <div className="max-w-[1080px] mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-[family-name:var(--font-inter)] text-xs font-medium tracking-[0.15em] uppercase text-[#5A7FA3] mb-3">
            Promise
          </p>
          <h2 className="font-[family-name:var(--font-shippori)] text-[1.2rem] md:text-[1.5rem] font-semibold leading-[1.9] tracking-[0.04em] text-center whitespace-pre-line">
            {"無理に「答え」を出さなくていい。\nまずは、そこにある違和感から。"}
          </h2>
          <p className="text-[0.9rem] text-[#444] mt-2.5 leading-[1.9] text-center">
            僕との時間は、あなたが「ちゃんとする」ための場ではありません。
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((card, index) => (
            <motion.div
              key={card.number}
              className="bg-white rounded-2xl px-6 py-8 md:px-9 md:py-10 shadow-[0_2px_12px_rgba(44,74,110,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(44,74,110,0.1)] transition-all duration-300"
              style={{
                borderTop: "3px solid",
                borderImage:
                  "linear-gradient(to right, #2C4A6E, #5A7FA3) 1",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.08,
              }}
            >
              {/* Number area */}
              <div className="relative">
                <div className="absolute w-[60px] h-[60px] rounded-full bg-[rgba(44,74,110,0.05)] -top-1 -left-1" />
                <span className="font-[family-name:var(--font-inter)] text-[1.8rem] font-semibold text-[#2C4A6E] relative z-10">
                  {card.number}
                </span>
                <div className="w-6 h-0.5 bg-[#2C4A6E] opacity-20 mt-1" />
              </div>

              {/* English subtitle */}
              <p className="font-[family-name:var(--font-inter)] text-[0.7rem] uppercase tracking-[0.12em] text-[#5A7FA3] mt-1">
                {card.english}
              </p>

              {/* Japanese title */}
              <h3 className="font-[family-name:var(--font-shippori)] text-[1.1rem] font-semibold mt-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[0.88rem] leading-[2] text-[#444] mt-3">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
