"use client";

import { motion } from "framer-motion";

const plans = [
  {
    step: "無料事前面談",
    duration: "30min",
    price: "¥0",
    description:
      "まずは相性と方向性の確認を行います。僕の雰囲気を確認するだけの時間でも構いません。",
    recommended: true,
    cta: "無料面談を予約",
    href: "https://forms.gle/LPaBEpPTGZg4k4Lq7",
    external: true,
  },
  {
    step: "お試し体験",
    duration: "60min",
    price: "¥5,500",
    description:
      "実際の対話を体験していただきます。継続するかどうかは、体験後にゆっくりご判断ください。",
    recommended: false,
    cta: "詳しく見る",
    href: "#contact",
    external: false,
  },
  {
    step: "導入の対話",
    duration: "90min",
    price: "¥16,500",
    description:
      "あなたの歩みや背景をじっくり共有し、伴走の「ゴール」と「現在地」を深く掘り下げます。",
    recommended: false,
    cta: "詳しく見る",
    href: "#contact",
    external: false,
  },
  {
    step: "継続伴走",
    duration: "60min",
    price: "¥11,000",
    description:
      "定期的な対話を通じて、あなたの歩みを支え続けます。",
    note: "※6回以上の継続を推奨",
    recommended: false,
    cta: "詳しく見る",
    href: "#contact",
    external: false,
  },
];

const corporateItems = [
  "代表・中核メンバーへの個別伴走",
  "チームの対話文化の設計・定着支援",
  "現場職・支援者の「関わり方」育成研修",
  "講演依頼（孤独・孤立対策、地域共創、関係性のデザイン等）",
];

export default function Menu() {
  return (
    <section id="menu" className="bg-white py-16 md:py-[100px] px-5 md:px-8">
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
            Menu
          </p>
          <h2 className="font-[family-name:var(--font-shippori)] text-[1.3rem] md:text-[1.7rem] font-semibold text-[#1A1A1A] mb-4">
            まずはお互いを知ることから
          </h2>
          <p className="text-[0.88rem] leading-[1.9] text-[#555] max-w-[520px] mx-auto">
            伴走において何より大切なのは「相性」です。まずは無料でお話しし、空気感を確認しましょう。
          </p>
        </motion.div>

        {/* 4-column Pricing Table */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.step}
              className={`bg-white border rounded-2xl p-8 flex flex-col relative hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(44,74,110,0.1)] transition-all duration-300 ${
                plan.recommended
                  ? "border-[rgba(44,74,110,0.1)] border-t-[3px] border-t-[#2C4A6E]"
                  : "border-[rgba(44,74,110,0.1)]"
              }`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: i * 0.12,
              }}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2C4A6E] text-white text-[0.7rem] px-3 py-0.5 rounded-full whitespace-nowrap">
                  まずはここから
                </span>
              )}

              {/* Step Name */}
              <h3 className="font-[family-name:var(--font-shippori)] text-[1.05rem] font-semibold mb-2">
                {plan.step}
              </h3>

              {/* Duration Badge */}
              <span className="inline-block font-[family-name:var(--font-inter)] text-[0.75rem] px-2.5 py-0.5 rounded-md bg-[rgba(44,74,110,0.07)] text-[#2C4A6E] mb-3 w-fit">
                {plan.duration}
              </span>

              {/* Price */}
              <p className="font-[family-name:var(--font-inter)] text-[1.8rem] font-semibold text-[#2C4A6E] mb-3">
                {plan.price}
              </p>

              {/* Description */}
              <p className="text-[0.84rem] leading-[1.9] text-[#444] flex-1">
                {plan.description}
                {plan.note && (
                  <>
                    <br />
                    <span className="text-[0.78rem] text-[#777]">
                      {plan.note}
                    </span>
                  </>
                )}
              </p>

              {/* CTA */}
              <div className="mt-6">
                {plan.recommended ? (
                  <a
                    href={plan.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2C4A6E] text-white px-5 py-3 rounded-xl text-[0.85rem] font-medium text-center block w-full hover:bg-[#1E3A5C] transition"
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <a
                    href={plan.href}
                    {...(plan.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="border border-[rgba(44,74,110,0.15)] text-[#444] px-5 py-3 rounded-xl text-[0.85rem] text-center block w-full hover:border-[#2C4A6E] hover:text-[#2C4A6E] transition"
                  >
                    {plan.cta}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center mt-14">
          <a
            href="https://forms.gle/LPaBEpPTGZg4k4Lq7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2C4A6E] text-white inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[0.88rem] font-medium shadow-[0_4px_16px_rgba(44,74,110,0.25)] hover:bg-[#1E3A5C] hover:-translate-y-0.5 transition"
          >
            無料事前面談に申し込む →
          </a>
        </div>

        {/* Corporate Block */}
        <div className="mt-16 pt-12 border-t border-[rgba(44,74,110,0.08)] max-w-[680px] mx-auto">
          <h3 className="font-[family-name:var(--font-shippori)] text-[1.08rem] font-semibold mb-5">
            団体・法人向け（NPO・自治体・企業）
          </h3>
          <ul className="space-y-2">
            {corporateItems.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[0.88rem] text-[#444] leading-[1.8]">
                <span className="mt-[0.55rem] w-1.5 h-1.5 rounded-full bg-[#2C4A6E] opacity-40 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[0.78rem] text-[#777] mt-3">
            ※内容・規模に応じて個別にお見積りいたします。
          </p>
          <div className="mt-5">
            <a
              href="https://forms.gle/WfbYygekVdcXMNwAA"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[rgba(44,74,110,0.15)] text-[#444] px-5 py-3 rounded-xl text-[0.85rem] text-center inline-block hover:border-[#2C4A6E] hover:text-[#2C4A6E] transition"
            >
              講演・研修のご相談はこちら
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
