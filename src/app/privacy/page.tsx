import Link from "next/link";
import Footer from "@/components/Footer";

const sections = [
  {
    number: "",
    title: "JUNTOサービスにおける個人情報の利用について",
    items: [
      "お申し込み時にご提供いただくお名前・メールアドレス等は、面談の日程調整、サービスのご案内、ご連絡のために利用いたします。",
      "サービス改善を目的とした統計的な分析に利用する場合がありますが、個人を特定できない形で処理いたします。",
    ],
  },
  {
    number: "1",
    title: "個人情報の取得",
    items: [
      "適法かつ公正な手段によって、個人情報を取得します。",
      "個人情報を取得する場合は、予めその目的を特定します。",
    ],
  },
  {
    number: "2",
    title: "個人情報の利用",
    items: [
      "個人情報を、取得の際に特定した利用目的の範囲内で、業務の遂行上必要な限りにおいて利用します。",
      "個人情報を共同利用し、または、個人情報の取扱いを外部に委託する場合には、当該共同利用者および委託先に対する適正な監督を行います。",
    ],
  },
  {
    number: "3",
    title: "第三者への非開示",
    items: [
      "法令または上記2.に定める場合を除き、事前に本人の同意を得ることなく個人情報を第三者に提供しません。",
    ],
  },
  {
    number: "4",
    title: "個人情報の管理",
    items: [
      "個人情報を正確かつ最新の内容に保つよう努めます。",
      "個人情報を適切に管理し、個人情報への不正なアクセスや漏えい、滅失、毀損等を防止し、セキュリティの確保に努めます。",
    ],
  },
  {
    number: "5",
    title: "個人情報の開示・訂正・利用停止・消去",
    items: [
      "保有する個人情報について開示・訂正・利用停止・消去等の求めがあった場合には、法令の趣旨に従い、速やかに適切な方法で対応します。",
    ],
  },
  {
    number: "6",
    title: "組織・体制",
    items: [
      "この方針を実施するための内部規定を策定し、これを実施し、維持し、継続的に改善します。",
      "上記内部規定に基づき、個人情報保護のための管理体制を確立し、個人情報の適切な管理に努めます。",
    ],
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      {/* Header */}
      <header className="border-b border-[rgba(44,74,110,0.06)] px-5 md:px-8 py-4">
        <div className="max-w-[800px] mx-auto flex items-center justify-between">
          <Link
            href="/official.website"
            className="font-[family-name:var(--font-inter)] text-[1.05rem] font-medium tracking-[0.2em] text-[#222] no-underline"
          >
            JUNTO
          </Link>
          <Link
            href="/official.website"
            className="text-[0.82rem] text-[#5A7FA3] hover:text-[#2C4A6E] transition no-underline"
          >
            トップに戻る
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[800px] mx-auto px-5 md:px-8 py-12 md:py-20">
        <p className="font-[family-name:var(--font-inter)] text-xs font-medium tracking-[0.15em] uppercase text-[#5A7FA3] mb-3">
          Privacy Policy
        </p>
        <h1 className="font-[family-name:var(--font-shippori)] text-[1.4rem] md:text-[1.8rem] font-semibold text-[#2C4A6E] mb-4">
          個人情報保護方針
        </h1>

        <p className="text-[0.92rem] leading-[2.1] text-[#333] mb-10">
          特定非営利活動法人ソンリッサは、高度情報通信社会における個人情報保護の重要性を認識し、以下の方針に基づき、個人情報を適切に保護するように努めます。
        </p>

        <div className="space-y-8">
          {sections.map((section, idx) => (
            <div
              key={section.number || `section-${idx}`}
              className="bg-white rounded-2xl px-6 md:px-8 py-7 md:py-8 shadow-[0_2px_12px_rgba(44,74,110,0.06)]"
            >
              <div className="flex items-baseline gap-3 mb-4">
                {section.number && (
                  <span className="font-[family-name:var(--font-inter)] text-[1.4rem] font-semibold text-[#2C4A6E]">
                    {section.number}
                  </span>
                )}
                <h2 className="font-[family-name:var(--font-shippori)] text-[1.05rem] font-semibold">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-2.5">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-[0.88rem] text-[#444] leading-[2]"
                  >
                    <span className="mt-[0.6rem] w-1.5 h-1.5 rounded-full bg-[#2C4A6E] opacity-40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[rgba(44,74,110,0.08)]">
          <p className="text-[0.88rem] leading-[1.9] text-[#444]">
            <span className="font-semibold">特定非営利活動法人ソンリッサ</span>
            <br />
            代表理事　萩原 涼平
          </p>
          <p className="mt-4 text-[0.78rem] text-[#777] leading-[1.9]">
            最終更新日：2026年4月1日
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
