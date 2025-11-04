"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { social } = useSelector((state) => state.global);

  const images = {
    x: { src: "/icons/twitter.svg", title: "Twitter" },
    facebook: { src: "/icons/facebook.svg", title: "Facebook" },
    instagram: { src: "/icons/instagram.svg", title: "Instagram" },
    youtube: { src: "/icons/youtube.svg", title: "Youtube" },
    google: { src: "/icons/google_plus.svg", title: "Google+" },
    linkedin: { src: "/icons/linkedin.svg", title: "Linkedin" },
  };
  return (
    <div className="bg-black text-white  flex justify-between items-center">
      <div className="container flex justify-between items-center">
        {/* <div className="sm:text-[14px] text-[12px]">Top left small info</div> */}
        <div className="sm:text-[14px] text-[12px]"></div>
        <div className="flex gap-4">
          {social &&
            Object.keys(social).map((key,i) => {
              const link = social[key];
              const meta = images[key];

              if (!link || !meta) return null;

              return (
                <Link href={link} key={i} target="_blank"> <img src={meta.src} alt="" className="sm:w-6 sm:h-6 w-4 h-4 " style={{filter: "var(--iconGreen)"}}/></Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Header;
