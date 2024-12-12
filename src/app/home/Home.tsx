import NavBar from "@/components/NavBar/NavBar";
import Header from "@/components/Header/Header";
import MyProjectSection from "@/components/ProjectSection/MyProjectSection";
import WhySupportMe from "@/components/SupportSection/WhySupportMe";
import CtaSection from "@/components/CTA/CtaSection";

export default function Home() {
  return (
    <>
      <Header />
      <section className="max-w-screen-xl mx-auto">
        <MyProjectSection />
        <WhySupportMe />
        <CtaSection />
      </section>
    </>
  );
}
