import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "About - WELES GROUP",
  description: "About WELES — mission and values.",
};

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <section className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-6">About WELES</h1>
        <p className="text-lg">
          This is the about page. Replace with real content and translations.
        </p>
      </section>
      <Footer />
    </div>
  );
}
