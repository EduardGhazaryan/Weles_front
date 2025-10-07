import Link from "next/link";
import React from "react";

const Header = () => {
  let images = [
    {
      src: "icons/twitter.svg",
      link: "https://x.com/",
    },
    {
      src: "icons/facebook.svg",
      link: "https://www.facebook.com/",
    },
    {
      src: "icons/instagram.svg",
      link: "https://www.instagram.com/",
    },
    {
      src: "icons/youtube.svg",
      link: "https://www.youtube.com/",
    },
    {
      src: "icons/google_plus.svg",
      link: "https://www.youtube.com/",
    },
  ];
  return (
    <div className="bg-black text-white py-2 px-4 flex justify-between items-center">
      <div className="container flex justify-between items-center">
        <div>Top left small info</div>
        <div className="flex gap-4">
          {
        images.map((it, i) => (
            <Link href={it.link} key={i} target="_blank"> <img src={it.src} alt="" className="w-6 h-6 " style={{filter: "var(--iconGreen)"}}/></Link>
        ))
    }
        </div>
      </div>
    </div>
  );
};

export default Header;
