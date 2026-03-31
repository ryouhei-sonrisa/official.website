"use client";

import { motion } from "framer-motion";

export default function Message() {
  return (
    <section id="message" className="bg-[#E6EBF4] py-[100px] px-8">
      <div className="grid grid-cols-[40%_60%] max-w-[1080px] mx-auto">
        {/* Left Column - Sticky */}
        <motion.div
          className="sticky top-0 self-start py-[60px] pr-12 pl-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-40px" }}
        >
          <p className="font-[family-name:var(--font-inter)] text-xs font-semibold tracking-[0.18em] uppercase text-[#5A7FA3] mb-6">
            Message
          </p>
          <h2 className="font-[family-name:var(--font-shippori)] text-[clamp(24px,2.8vw,32px)] font-semibold text-[#2C4A6E] leading-[1.5] tracking-[0.04em] mb-4">
            なぜ、いま
            <br />
            「伴走」が必要なのか
          </h2>
          <p className="font-[family-name:var(--font-shippori)] text-[clamp(14px,1.4vw,16px)] text-[#5A7FA3] leading-[1.7]">
            毎日をせいいっぱい
            <br />
            生きているあなたへ
          </p>
          <div className="w-10 h-0.5 bg-[#2C4A6E] opacity-25 mt-8" />
        </motion.div>

        {/* Right Column - White Card */}
        <div className="py-10 pr-8">
          <motion.div
            className="bg-white rounded-2xl p-12 shadow-[0_8px_28px_rgba(44,74,110,0.1)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-40px" }}
          >
            <motion.p
              className="text-[15px] leading-[2] text-[#222] mb-7 tracking-[0.02em]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              viewport={{ once: true, margin: "-40px" }}
            >
              「もっとよくしたい」「目の前の人の苦しみを見過ごしたくない」──そんな真っ直ぐな願いを抱えて、独りで戦っているあなたへ。
            </motion.p>
            <motion.p
              className="text-[15px] leading-[2] text-[#222] mb-7 tracking-[0.02em]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-40px" }}
            >
              より良い社会や未来を願うほど、周囲との温度差に孤独を感じたり、頑張るほどに「自分は力不足ではないか」と葛藤が深まることもあるでしょう。僕もそうでした。
            </motion.p>
            <motion.div
              className="bg-[#EFF2F8] border-l-[3px] border-[#2C4A6E] rounded-r-lg p-8 mt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <p className="font-[family-name:var(--font-shippori)] text-[15px] leading-[2.1] text-[#222] tracking-[0.03em]">
                伴走とは、僕が正解を教えることではありません。あなたの隣に座り、同じ景色を見つめ、絡まった糸を一緒にほどきながら、あなた自身が「これでいいんだ」と思える納得解を見つけていくプロセスです。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
