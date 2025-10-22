import "./globals.css";
import Providers from "../components/providers/Providers";
import Head from "next/head";
import Footer from "@/components/layout/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "WELES GROUP - Swiss Vision, Global Impact",
  description:
    "Corporate landing for Weles Group — solar, legal, marketing and more. Armenian and English support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="Weles, solar energy, legal services, marketing, international"
        />
        <meta name="author" content="Weles Group" />
        {/* OpenGraph */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Providers>
          <nav className="overflow-x-hidden">
            <Header/>
            <Navbar/>
          </nav>
          {children}
          <footer className="overflow-x-hidden pt-[100px]">
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
