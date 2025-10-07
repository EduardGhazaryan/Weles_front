"use client";
import Navbar from "../components/layout/Navbar";
import HeroCarousel from "../components/hero/HeroCarousel";
import About from "../components/sections/About";
import Industries from "../components/sections/Industries";
import BlogCarousel from "../components/sections/BlogCarousel";
import Branches from "../components/sections/Branches";
import ContactForm from "../components/sections/ContactForm";
import Footer from "../components/layout/Footer";
import Header from "@/components/header/Header";
import { useRef } from "react";
import Statistics from "@/components/statistics/Statistics";
import Feautured from "@/components/feautured/Feautured";


export default function Home() {
  const aboutRef = useRef(null);
  const industriesRef = useRef(null);
  const blogsRef = useRef(null);
  const branchesRef = useRef(null);
  const contactsRef = useRef(null);

  const sections = {
    about: aboutRef,
    industries: industriesRef,
    blogs: blogsRef,
    branches: branchesRef,
    contacts: contactsRef,
  };
  return (
    <main>
       <Header/>
       <Navbar sections={sections}/>
      <HeroCarousel />
     <section className="section" ref={aboutRef}>
        <About />
      </section>
      <section className="section bg-[#f7f7f7]" ref={industriesRef}>
        <Industries />
      </section>
      <Statistics/>
      <Feautured/>
      <section className="section" ref={blogsRef}>
        <BlogCarousel />
      </section>
      <section className="section bg-white" ref={branchesRef}>
        <Branches />
      </section>
      <section className="section" ref={contactsRef}>
        <ContactForm />
      </section>
      <Footer sections={sections}/>
    </main>
  );
}
