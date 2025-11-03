"use client";

import { CarouselSlide } from "../carousel/CarouselSlide";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

export default function BlogCarousel() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div id="blogs" className="container mx-auto text-center ">
      <h3 className="sm:text-[50px] text-[30px] font-bold mb-8">{t("latestBlogs")}</h3>

      <div className="w-full min-h-[300px] px-[50px]">
        <CarouselSlide />
      </div>

      <button
        type="button"
        className="bg-[var(--mainGreen)] text-white px-8 py-3 rounded-3xl hover:bg-green-700 transition-all cursor-pointer"
        onClick={() => router.push("/blogs")}
      >
        {t("buttons.seeMore")}
      </button>
    </div>
  );
}
