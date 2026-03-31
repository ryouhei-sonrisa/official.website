import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Shippori_Mincho_B1 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const shipporiMincho = Shippori_Mincho_B1({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-shippori",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JUNTO — あなたの弱さも迷いも、そのままでいい。",
  description:
    "あなたの想いを、独りきりにしない。10年の対話を糧に、次の一歩を伴走します。NPO法人ソンリッサ代表・萩原涼平による個別伴走支援サービス。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${shipporiMincho.variable} ${notoSansJP.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
