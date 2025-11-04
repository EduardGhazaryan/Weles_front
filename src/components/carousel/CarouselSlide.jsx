import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

 function formatBlogDate(dateString, locale = "en") {
  const date = new Date(dateString);

  const monthsHY = [
    "Հունվար",
    "Փետրվար",
    "Մարտ",
    "Ապրիլ",
    "Մայիս",
    "Հունիս",
    "Հուլիս",
    "Օգոստոս",
    "Սեպտեմբեր",
    "Հոկտեմբեր",
    "Նոյեմբեր",
    "Դեկտեմբեր",
  ];

  if (locale === "am" || locale === "hy") {
    const day = date.getDate();
    const month = monthsHY[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  }

  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}


export function CarouselSlide() {
  const { blogs } = useSelector((state) => state.global);
  const router = useRouter();
  const {i18n} = useTranslation()

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="lg:p-5 py-2">
        {blogs?.length > 0 &&
          blogs?.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3" >
              <div className="cursor-pointer" onClick={() => router.push(`/blogs/${item?.id}`)}>
                <Card className="p-0 border-none shadow-[0px_0px_12px_#d1d1d1]">
                  <CardContent className="flex p-0 lg:h-[400px] min-h-[400px] flex-col border-none overflow-hidden relative">
                    <div className="absolute top-4 left-4 bg-[var(--mainGreen)] min-w-[100px] rounded text-white px-2">
                    {formatBlogDate(item?.created_at, i18n.language)}
                    </div>
                    <img
                      src={item?.image}
                      alt=""
                      className="w-full h-[200px] rounded-2xl object-cover"
                    />
                    <div className="flex flex-col gap-2 p-4 overflow-hidden justify-between min-h-[200px]">
                      <span className="font-semibold text-[20px]">
                        {item.title_am}
                      </span>
                      <span
                        className="text-left text-sm text-gray-600 line-clamp-5"
                        dangerouslySetInnerHTML={{ __html: item?.text_am }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
