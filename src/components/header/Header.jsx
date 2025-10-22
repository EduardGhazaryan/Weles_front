import Link from "next/link";
import React from "react";

const Header = () => {
  let images = [
    {
      src: "/icons/twitter.svg",
      link: "https://x.com/",
    },
    {
      src: "/icons/facebook.svg",
      link: "https://www.facebook.com/",
    },
    {
      src: "/icons/instagram.svg",
      link: "https://www.instagram.com/",
    },
    {
      src: "/icons/youtube.svg",
      link: "https://www.youtube.com/",
    },
    {
      src: "/icons/google_plus.svg",
      link: "https://www.youtube.com/",
    },
  ];
  return (
    <div className="bg-black text-white  flex justify-between items-center">
      <div className="container flex justify-between items-center">
        <div className="sm:text-[14px] text-[12px]">Top left small info</div>
        <div className="flex gap-4">
          {
        images.map((it, i) => (
            <Link href={it.link} key={i} target="_blank"> <img src={it.src} alt="" className="sm:w-6 sm:h-6 w-4 h-4 " style={{filter: "var(--iconGreen)"}}/></Link>
        ))
    }
        </div>
      </div>
    </div>
  );
};

export default Header;
