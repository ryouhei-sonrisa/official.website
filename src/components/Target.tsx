"use client";

import { motion } from "framer-motion";

const cards = [
  {
    num: "01",
    title: "組織の中で、想いと現実の狭間にいる方",
    body: "「この組織を良くしたい」と思って飛び込んだのに、気づけば周囲との温度差に疲弊している。伝えたいことがあるのに、思いを飲み込む日々を過ごしている。",
  },
  {
    num: "02",
    title: "誰にも本音を話せないリーダー・経営者の方",
    body: "チームのために走り続けているけれど、弱音を吐ける相手がいない。「リーダーなんだからしっかりしなきゃ」と自分に言い聞かせて、夜中にひとりで悶々としている。",
  },
  {
    num: "03",
    title: "一歩踏み出したいのに、足がすくんでいる方",
    body: "社会や地域に関わりたい気持ちはあるのに、「こんな自分が関わっていいのだろうか」という不安が一歩目を重くしている。",
  },
];

export default function Target() {
  return (
    <section id="target" className="bg-[#EFF2F8] px-5 md:px-8 py-16 md:py-[100px]">
      <div className="mx-auto max-w-[1080px]">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-[family-name:var(--font-inter)] text-xs font-medium uppercase tracking-[0.15em] text-[#5A7FA3]">
            For You
          </p>
          <h2 className="font-[family-name:var(--font-shippori)] text-[1.5rem] font-semibold leading-[1.9] tracking-[0.04em]">
            もし今、こんな気持ちを抱えているなら
          </h2>
        </div>

        {/* Stacked Story Cards */}
        <div className="mx-auto flex max-w-[800px] flex-col gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.num}
              className="relative overflow-hidden rounded-2xl bg-white px-6 py-8 md:px-12 md:py-10 shadow-[0_2px_12px_rgba(44,74,110,0.06)]"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-30px" }}
            >
              {/* Watermark number */}
              <span className="pointer-events-none absolute right-4 md:right-8 top-4 select-none font-[family-name:var(--font-inter)] text-[4rem] md:text-[6rem] font-bold leading-none text-[rgba(44,74,110,0.08)]">
                {card.num}
              </span>

              {/* Title with left accent */}
              <h3 className="flex items-start font-[family-name:var(--font-shippori)] text-[1.02rem] font-semibold">
                <span className="mr-3 mt-[2px] block h-8 w-1 shrink-0 rounded-sm bg-[#2C4A6E]" />
                {card.title}
              </h3>

              {/* Body */}
              <p className="mt-3 text-[0.88rem] leading-[2] text-[#444]">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing text */}
        <p className="mt-12 text-center font-[family-name:var(--font-shippori)] text-[0.98rem] leading-[2.2] text-[#444]">
          「うまく話せない」「まとまっていない」。
          <br />
          そんな状態のままで、来ていただいて大丈夫です。
        </p>
      </div>
    </section>
  );
}
