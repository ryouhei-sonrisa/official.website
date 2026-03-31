import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Message from "@/components/Message";
import Promise from "@/components/Promise";
import Target from "@/components/Target";
import Menu from "@/components/Menu";
import Profile from "@/components/Profile";
import Voice from "@/components/Voice";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Message />
        <Promise />
        <Target />
        <Menu />
        <Profile />
        <Voice />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
