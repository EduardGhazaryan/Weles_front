import HeroCarousel from "../components/hero/HeroCarousel";
import About from "../components/sections/About";
import Industries from "../components/sections/Industries";
import BlogCarousel from "../components/sections/BlogCarousel";
import Branches from "../components/sections/Branches";
import ContactForm from "../components/sections/ContactForm";
import Statistics from "@/components/statistics/Statistics";
import Feautured from "@/components/feautured/Feautured";

export default function Home() {

  return (
    <main className="flex flex-col gap-[100px]">
      <header className="overflow-x-hidden">
        <HeroCarousel />
      </header>
      <section className="section" id="about">
        <About />
      </section>
      <section className="section bg-[#f7f7f7]" id="industries">
        <Industries />
      </section>
      <Statistics />
      <Feautured />
      <section className="section" id="blogs">
        <BlogCarousel />
      </section>
      <section className="section bg-white" id="branches">
        <Branches />
      </section>
      <section className="section" id="contact">
        <ContactForm />
      </section>
    </main>
  );
}
