import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F8F9FC] border-t border-[rgba(44,74,110,0.06)] py-12 px-5 md:px-8 text-center">
      <p className="font-[family-name:var(--font-inter)] text-[0.85rem] font-medium tracking-[0.2em]">
        JUNTO
      </p>
      <p className="text-[0.7rem] text-[#777] mt-1 mb-4">
        スペイン語で「ともに」
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mb-4">
        <a
          href="https://sonrisa-npo.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.72rem] text-[#777] hover:text-[#2C4A6E] transition"
        >
          NPO法人ソンリッサ
        </a>
        <Link
          href="/tokushoho"
          className="text-[0.72rem] text-[#777] hover:text-[#2C4A6E] transition"
        >
          特定商取引法に基づく表記
        </Link>
        <Link
          href="/privacy"
          className="text-[0.72rem] text-[#777] hover:text-[#2C4A6E] transition"
        >
          プライバシーポリシー
        </Link>
      </div>
      <p className="text-[0.62rem] text-[#777] opacity-50 font-[family-name:var(--font-inter)]">
        &copy; 2026 Ryohei Hagiwara
      </p>
    </footer>
  );
}
