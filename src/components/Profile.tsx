"use client";

import { motion } from "framer-motion";

const awards = [
  "Yunus&Youth Social Business Design Contest 優勝",
  "Global Social Business Summit（パリ）登壇",
  "ぐんま地域づくりAWARD 大賞",
  "群馬イノベーションアワード「スタートアップ部門」入賞",
  "内閣府「孤独・孤立対策に資する官民・民民連携による特色ある取組」好事例選出",
];

const qualifications = [
  "産業カウンセラー",
  "米国CTI認定 Co-Active Coaching 基礎・応用コース修了",
  "自治体・官民連携・協議会等の委員歴任",
  "福祉・地域政策系大学 非常勤講師",
];

const media = [
  "NHK「おはよう日本」",
  "テレビ東京「全力イノベーターズ」",
  "朝日新聞",
  "読売新聞 他多数",
];

export default function Profile() {
  return (
    <section id="profile" className="bg-[#F8F9FC] py-16 md:py-[100px] px-5 md:px-8">
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
            Profile
          </p>
          <h2 className="font-[family-name:var(--font-shippori)] text-[1.2rem] md:text-[1.5rem] font-semibold leading-[1.9] tracking-[0.04em]">
            きれいごとでは進まない現場を知っているから、
            <br className="hidden md:block" />
            等身大のあなたを支えられる。
          </h2>
        </motion.div>

        {/* Main Profile Card */}
        <motion.div
          className="bg-white rounded-2xl p-7 md:p-12 shadow-[0_2px_12px_rgba(44,74,110,0.06)] mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12">
            {/* Left: Photo & Name */}
            <div>
              <img
                src="/official.website/profile.jpg"
                alt="萩原涼平"
                className="w-[200px] md:w-full mx-auto aspect-[3/4] rounded-xl object-cover object-top"
              />
              <div className="mt-5 text-center">
                <h3 className="font-[family-name:var(--font-shippori)] text-[1.3rem] font-semibold text-[#2C4A6E]">
                  萩原 涼平
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-[0.75rem] text-[#5A7FA3] mt-0.5">
                  Ryohei Hagiwara
                </p>
                <p className="text-[0.78rem] text-[#444] mt-2 leading-[1.8]">
                  NPO法人ソンリッサ 代表理事
                  <br />
                  社会起業家 ／ 伴走支援パートナー
                </p>
              </div>
            </div>

            {/* Right: Bio */}
            <div>
              <p className="text-[0.92rem] leading-[2.1] text-[#222] mb-5">
                1994年生まれ。「高齢者の孤立・孤独を、笑顔に変える」をミッションに、2017年にNPO法人ソンリッサを設立。
              </p>
              <p className="text-[0.92rem] leading-[2.1] text-[#222] mb-5">
                自身の原体験に基づき、制度の狭間で孤立する高齢者に寄り添う事業を展開。若者が孫のように高齢者を支える「まごマネージャー」の育成や、独居高齢者向け見守りサービス「Tayory」など、多世代が支え合う地域コミュニティモデルを構築・実装する。
              </p>
              <p className="text-[0.92rem] leading-[2.1] text-[#222] mb-5">
                内閣府の孤独・孤立対策事例への選出や、群馬県との協働事業など、現場の声に基づく政策提言も積極的に行い、次世代のリーダーとして注目を集める。
              </p>

              {/* Quote */}
              <div className="bg-[#EFF2F8] border-l-[3px] border-[#2C4A6E] rounded-r-lg p-6 mt-2">
                <p className="font-[family-name:var(--font-shippori)] text-[0.92rem] leading-[2.1] text-[#222] tracking-[0.03em]">
                  単に話を聞くだけなら、私でなくてもいいかもしれません。私があなたのお役に立てるのは、「想いを、現実の形にする」難しさと痛みを、誰よりも知っているからです。
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3-Column Detail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Awards */}
          <motion.div
            className="bg-white rounded-2xl px-8 py-9 shadow-[0_2px_12px_rgba(44,74,110,0.06)]"
            style={{
              borderTop: "3px solid",
              borderImage: "linear-gradient(to right, #2C4A6E, #5A7FA3) 1",
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="font-[family-name:var(--font-inter)] text-[0.7rem] uppercase tracking-[0.12em] text-[#5A7FA3] mb-1">
              Awards
            </p>
            <h3 className="font-[family-name:var(--font-shippori)] text-[1rem] font-semibold mb-4">
              受賞歴・選出
            </h3>
            <ul className="space-y-2.5">
              {awards.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[0.82rem] text-[#444] leading-[1.8]"
                >
                  <span className="mt-[0.55rem] w-1.5 h-1.5 rounded-full bg-[#2C4A6E] opacity-40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Qualifications */}
          <motion.div
            className="bg-white rounded-2xl px-8 py-9 shadow-[0_2px_12px_rgba(44,74,110,0.06)]"
            style={{
              borderTop: "3px solid",
              borderImage: "linear-gradient(to right, #2C4A6E, #5A7FA3) 1",
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
          >
            <p className="font-[family-name:var(--font-inter)] text-[0.7rem] uppercase tracking-[0.12em] text-[#5A7FA3] mb-1">
              Qualifications
            </p>
            <h3 className="font-[family-name:var(--font-shippori)] text-[1rem] font-semibold mb-4">
              資格・スキル
            </h3>
            <ul className="space-y-2.5">
              {qualifications.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[0.82rem] text-[#444] leading-[1.8]"
                >
                  <span className="mt-[0.55rem] w-1.5 h-1.5 rounded-full bg-[#2C4A6E] opacity-40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Media & Book */}
          <motion.div
            className="bg-white rounded-2xl px-8 py-9 shadow-[0_2px_12px_rgba(44,74,110,0.06)]"
            style={{
              borderTop: "3px solid",
              borderImage: "linear-gradient(to right, #2C4A6E, #5A7FA3) 1",
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
          >
            <p className="font-[family-name:var(--font-inter)] text-[0.7rem] uppercase tracking-[0.12em] text-[#5A7FA3] mb-1">
              Media & Book
            </p>
            <h3 className="font-[family-name:var(--font-shippori)] text-[1rem] font-semibold mb-4">
              メディア・著書
            </h3>
            <ul className="space-y-2.5 mb-5">
              {media.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[0.82rem] text-[#444] leading-[1.8]"
                >
                  <span className="mt-[0.55rem] w-1.5 h-1.5 rounded-full bg-[#2C4A6E] opacity-40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-[rgba(44,74,110,0.08)]">
              <p className="text-[0.72rem] text-[#5A7FA3] font-medium mb-1">著書（共著）</p>
              <p className="text-[0.82rem] text-[#444] leading-[1.8]">
                『居場所づくりから始める、ごちゃまぜで社会課題を解決するための不完全な挑戦の事例集』（クリエイツかもがわ、2024年）
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
