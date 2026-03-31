"use client";

import { motion } from "framer-motion";

const abstractPaths = [
  "M-50,120 C200,80 400,200 650,140 S1000,180 1300,100 S1600,160 1950,90",
  "M-50,220 C150,280 350,160 600,240 S900,200 1150,260 S1500,190 1950,230",
  "M-50,340 C250,300 450,380 700,320 S1050,370 1350,310 S1700,350 1950,290",
  "M-50,460 C180,500 380,420 630,480 S950,440 1250,490 S1550,430 1950,470",
  "M-50,560 C220,520 420,590 670,540 S980,580 1280,530 S1620,570 1950,520",
  "M-50,660 C200,700 400,640 650,690 S1000,650 1300,700 S1600,660 1950,640",
  "M-50,760 C260,720 460,780 710,740 S1060,770 1360,720 S1680,760 1950,730",
];

const pathDurations = [18, 22, 16, 24, 20, 17, 23];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.7, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{ padding: "140px 32px 80px" }}
    >
      {/* Abstract Lines Background */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1900 900"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {abstractPaths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="#2C4A6E"
            strokeOpacity={0.06 + (i % 3) * 0.01}
            strokeWidth={1 + (i % 2) * 0.5}
            fill="none"
            strokeDasharray="2400"
            strokeDashoffset="2400"
            animate={{ strokeDashoffset: [2400, 0, -2400] }}
            transition={{
              duration: pathDurations[i],
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>

      {/* Edge fade overlays */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent z-[1]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-[1]" />
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-[1]" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-[640px] mx-auto">
        <motion.h1
          className="font-[family-name:var(--font-shippori)] font-bold text-[2.4rem] leading-[2] tracking-[0.06em] text-[#2C4A6E]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          あなたの弱さも迷いも、
          <br />
          そのままでいい。
        </motion.h1>

        <motion.p
          className="text-[1.05rem] text-[#444] tracking-[0.12em] mt-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          その一歩を、ともに。
        </motion.p>

        <motion.p
          className="mt-6 text-[0.95rem] leading-[2.1] text-[#444]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          あなたの想いを、独りきりにしない。
          <br />
          10年の対話を糧に、次の一歩を伴走します。
        </motion.p>

        {/* Profile card */}
        <motion.div
          className="mt-7 inline-flex items-center gap-[14px] px-6 py-[14px] bg-white rounded-xl shadow-sm"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <div className="w-[42px] h-[42px] rounded-full bg-[#E6EBF4]" />
          <div className="text-left">
            <p className="font-bold text-[#2C4A6E]">萩原 涼平</p>
            <p className="text-[#777] text-[0.75rem]">
              NPO法人ソンリッサ 代表理事・産業カウンセラー
            </p>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="mt-9 flex gap-3 justify-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <a
            href="#menu"
            className="bg-[#2C4A6E] text-white px-[30px] py-[15px] rounded-xl shadow-[0_4px_16px_rgba(44,74,110,0.25)] hover:bg-[#1E3A5C] hover:-translate-y-0.5 transition"
          >
            伴走支援について →
          </a>
          <a
            href="#message"
            className="bg-white text-[#444] border border-[rgba(44,74,110,0.15)] px-[30px] py-[15px] rounded-xl hover:border-[#2C4A6E] hover:text-[#2C4A6E] hover:-translate-y-0.5 transition"
          >
            メッセージを読む
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="font-[family-name:var(--font-inter)] text-[0.6rem] tracking-[0.2em] uppercase text-[#777]">
          Scroll
        </span>
        <motion.div
          className="w-px h-[28px] bg-[#2C4A6E]"
          animate={{
            opacity: [0.3, 1, 0.3],
            scaleY: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}
