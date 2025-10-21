"use client";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

export default function Feautured() {
  const { t } = useTranslation();
  const items = t("hero", { returnObjects: true });
  const [idx, setIdx] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % items.length);
    }, 4000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [items.length]);

  const handleClick = (type) => {
    clearInterval(intervalRef.current);

    setIdx((prev) => {
      if (type === "prev") {
        return (prev - 1 + items.length) % items.length;
      } else {
        return (prev + 1) % items.length;
      }
    });

    startAutoSlide();
  };

  return (
    <section
      className="relative h-[420px]  overflow-hidden bg-green-200 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(images/wgoc3.png)` }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <div className="container flex justify-center gap-[150px]">
          <div>
            <h1 className="sm:text-6xl text-2xl font-bold tracking-wider drop-shadow-lg">
              {items[idx].title}
            </h1>
            <p className="mt-4 sm:text-xl text-[14px]">{items[idx].subtitle}</p>
          </div>
        </div>

        <div className="flex gap-2 mt-6 absolute bottom-4 left-1/2 -translate-x-1/2">
          <div className="flex gap-3 mt-6">
            {items.map((it, i) => (
              <div
                key={it.title}
                onClick={() => {
                  clearInterval(intervalRef.current);
                  setIdx(i);
                  startAutoSlide();
                }}
                className={`
        w-[15px] h-[15px] rounded-full flex items-center justify-center cursor-pointer transition-all
        ${idx === i ? "border-2 border-white" : "bg-gray-400"}
      `}
              >
                {idx === i && (
                  <div className="w-[7px] h-[7px] rounded-full bg-green-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
