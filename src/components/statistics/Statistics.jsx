"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const counters = [
  { value: 10000, label: "statistics.projects", suffix: "+" },
  { value: 5, label: "statistics.branches", suffix: "+" },
  { value: 100, label: "statistics.employees", suffix: "+" },
];


const easeOutQuad = (t) => t * (2 - t);

const Statistics = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const [start, setStart] = useState(false);
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  useEffect(() => {
    if (!start) return;

    const duration = 3000; 
    const startTime = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = easeOutQuad(progress);

      setCounts(
        counters.map((c) => Math.floor(c.value * easedProgress))
      );

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [start]);

  return (
    <div className="container" id="statistics" ref={ref}>
      <div className="py-[100px] flex gap-[30px] justify-between lg:flex-nowrap flex-wrap">
        {counters.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 shadow-[0px_0px_12px_#d1d1d1] p-[50px] rounded-2xl lg:w-[22%] sm:w-[45%] w-[100%]"
          >
            <p className="text-[50px] text-[var(--mainGreen)] font-bold">
              {counts[i].toLocaleString()}{item.suffix}
            </p>
            <p className="text-[28px]">{t(item.label)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
