"use client";

import { motion } from "framer-motion";

export default function Message() {
  return (
    <section id="message" className="bg-[#E6EBF4] py-16 md:py-[100px] px-5 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] max-w-[1080px] mx-auto">
        {/* Left Column - Sticky */}
        <motion.div
          className="md:sticky md:top-0 self-start py-8 md:py-[60px] pr-0 md:pr-12 pl-0 md:pl-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-40px" }}
        >
          <p className="font-[family-name:var(--font-inter)] text-xs font-semibold tracking-[0.18em] uppercase text-[#5A7FA3] mb-4 md:mb-6">
            Message
          </p>
          <h2 className="font-[family-name:var(--font-shippori)] text-[clamp(22px,2.8vw,32px)] font-semibold text-[#2C4A6E] leading-[1.5] tracking-[0.04em] mb-3 md:mb-4">
            なぜ、いま
            <br />
            「伴走」が必要なのか
          </h2>
          <p className="font-[family-name:var(--font-shippori)] text-[clamp(14px,1.4vw,16px)] text-[#5A7FA3] leading-[1.7]">
            毎日をせいいっぱい
            <br />
            生きているあなたへ
          </p>
          <div className="w-10 h-0.5 bg-[#2C4A6E] opacity-25 mt-6 md:mt-8" />
        </motion.div>

        {/* Right Column - White Card */}
        <div className="py-4 md:py-10 pr-0 md:pr-8">
          <motion.div
            className="bg-white rounded-2xl p-7 md:p-12 shadow-[0_8px_28px_rgba(44,74,110,0.1)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-40px" }}
          >
            <motion.p
              className="text-[14px] md:text-[15px] leading-[2] text-[#222] mb-5 md:mb-7 tracking-[0.02em]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              viewport={{ once: true, margin: "-40px" }}
            >
              「もっとよくしたい」「目の前の人の苦しみを見過ごしたくない」──そんな真っ直ぐな願いを抱えて、独りで戦っているあなたへ。
            </motion.p>
            <motion.p
              className="text-[14px] md:text-[15px] leading-[2] text-[#222] mb-5 md:mb-7 tracking-[0.02em]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-40px" }}
            >
              より良い社会や未来を願うほど、周囲との温度差に孤独を感じたり、頑張るほどに「自分は力不足ではないか」と葛藤が深まることもあるでしょう。僕もそうでした。
            </motion.p>
            <motion.div
              className="bg-white border border-[rgba(44,74,110,0.08)] rounded-lg p-5 md:p-6 mt-3 mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <p className="font-[family-name:var(--font-shippori)] text-[0.82rem] font-semibold text-[#2C4A6E] mb-2">
                伴走支援とは？
              </p>
              <p className="text-[13px] md:text-[14px] leading-[2] text-[#444]">
                カウンセリングのように「治す」ことが目的ではなく、コンサルティングのように「答えを提供する」ものでもありません。あなたの隣を歩きながら、対話を通じて一緒に考え、あなた自身の力で前に進む道を見つけていく支援のかたちです。
              </p>
            </motion.div>
            <motion.div
              className="bg-[#EFF2F8] border-l-[3px] border-[#2C4A6E] rounded-r-lg p-5 md:p-8 mt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <p className="font-[family-name:var(--font-shippori)] text-[14px] md:text-[15px] leading-[2.1] text-[#222] tracking-[0.03em]">
                伴走とは、私が正解を差し出すことではありません。あなたの隣に座り、同じ景色を見つめながら、絡まった糸をひとつずつ丁寧にほどいていく。その中で、あなた自身が「これでいいんだ」と心から思える納得解を、一緒に見つけていくプロセスです。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
