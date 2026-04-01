import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | JUNTO",
};

const rows = [
  {
    label: "事業者名",
    value: "特定非営利活動法人ソンリッサ",
  },
  {
    label: "代表者",
    value: "萩原 涼平（代表理事）",
  },
  {
    label: "所在地",
    value: "群馬県前橋市茂木町270番地71",
  },
  {
    label: "連絡先",
    value: "電話番号：請求があった場合には遅滞なく開示いたします。\nメールアドレス：info@sonrisa-npo.com\nお問い合わせはGoogleフォームからも受け付けております。",
  },
  {
    label: "サービス名",
    value: "JUNTO（個別伴走支援サービス）",
  },
  {
    label: "サービス内容",
    value: "オンラインによる個別対話・伴走支援（Zoom等を使用）",
  },
  {
    label: "サービスの対価",
    value:
      "無料事前面談：無料（30分）\nお試し体験：5,500円（税込）／60分\n導入の対話：16,500円（税込）／90分\n継続伴走：11,000円（税込）／60分\n※法人・団体向けは内容に応じて個別にお見積りいたします。",
  },
  {
    label: "対価以外に必要な費用",
    value:
      "インターネット接続に必要な通信費はお客様のご負担となります。それ以外の追加費用はありません。",
  },
  {
    label: "お支払い方法",
    value: "銀行振込（前払い）\n※お支払い方法の詳細は、お申し込み後にご案内いたします。",
  },
  {
    label: "お支払い時期",
    value: "セッション実施日の前日までにお振込みをお願いしております。",
  },
  {
    label: "サービスの提供時期",
    value: "お申し込み・お支払い確認後、双方の日程調整を経て実施いたします。",
  },
  {
    label: "キャンセル・返金について",
    value:
      "セッション開始24時間前までのキャンセル：全額返金いたします。\nセッション開始24時間以内のキャンセル：返金はいたしかねます（日程変更は1回まで可能です）。\n※やむを得ない事情がある場合は、個別にご相談ください。",
  },
  {
    label: "動作環境",
    value:
      "Zoom等のビデオ通話ツールが利用できるPC・スマートフォン・タブレット。安定したインターネット環境を推奨します。",
  },
  {
    label: "お申し込み方法",
    value: "当サイトのお申し込みフォーム（Googleフォーム）よりお申し込みください。",
  },
  {
    label: "クーリングオフについて",
    value: "通信販売に該当するため、クーリングオフ制度は適用されません。キャンセル・返金については上記をご確認ください。",
  },
];

export default function Tokushoho() {
  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      {/* Header */}
      <header className="border-b border-[rgba(44,74,110,0.06)] px-5 md:px-8 py-4">
        <div className="max-w-[800px] mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="font-[family-name:var(--font-inter)] text-[1.05rem] font-medium tracking-[0.2em] text-[#222] no-underline"
          >
            JUNTO
          </Link>
          <Link
            href="/"
            className="text-[0.82rem] text-[#5A7FA3] hover:text-[#2C4A6E] transition no-underline"
          >
            トップに戻る
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[800px] mx-auto px-5 md:px-8 py-12 md:py-20">
        <p className="font-[family-name:var(--font-inter)] text-xs font-medium tracking-[0.15em] uppercase text-[#5A7FA3] mb-3">
          Legal
        </p>
        <h1 className="font-[family-name:var(--font-shippori)] text-[1.4rem] md:text-[1.8rem] font-semibold text-[#2C4A6E] mb-10">
          特定商取引法に基づく表記
        </h1>

        <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(44,74,110,0.06)] overflow-hidden">
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-1 md:grid-cols-[200px_1fr] ${
                i !== rows.length - 1
                  ? "border-b border-[rgba(44,74,110,0.06)]"
                  : ""
              }`}
            >
              <div className="bg-[#EFF2F8] px-6 py-4 md:py-5 font-[family-name:var(--font-shippori)] text-[0.88rem] font-semibold text-[#2C4A6E]">
                {row.label}
              </div>
              <div className="px-6 py-4 md:py-5 text-[0.88rem] leading-[1.9] text-[#333] whitespace-pre-line">
                {row.value}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[0.78rem] text-[#777] leading-[1.9]">
          最終更新日：2026年4月1日
        </p>
      </main>
      <Footer />
    </div>
  );
}
