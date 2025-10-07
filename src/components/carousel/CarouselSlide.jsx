import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

let carouselItems = [
  {
    img: "images/solars.jpg",
    title: "Lorem Ipsum is a dummy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aspernatur at, nihil ipsam exercitationem perspiciatis vel quaerat optio officiis tempora rem maxime voluptas cum, esse magnam delectus veniam labore nulla eligendi beatae explicabo. Sed odit dolor dolorum explicabo quidem architecto.",
    date: new Date("2025-08-22"),
  },
  {
    img: "images/workSpace.jpeg",
    title: "Lorem Ipsum is a dummy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aspernatur at, nihil ipsam exercitationem perspiciatis vel quaerat optio officiis tempora rem maxime voluptas cum, esse magnam delectus veniam labore nulla eligendi beatae explicabo. Sed odit dolor dolorum explicabo quidem architecto.",
    date: new Date("2025-08-22"),
  },
  {
    img: "images/agreements.jpg",
    title: "Lorem Ipsum is a dummy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aspernatur at, nihil ipsam exercitationem perspiciatis vel quaerat optio officiis tempora rem maxime voluptas cum, esse magnam delectus veniam labore nulla eligendi beatae explicabo. Sed odit dolor dolorum explicabo quidem architecto.",
    date: new Date("2025-08-22"),
  },
];

export function CarouselSlide() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="p-5">
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="">
              <Card className="p-0 border-none shadow-[0px_0px_12px_#d1d1d1]">
                <CardContent className="flex p-0 h-[400px] flex-col border-none overflow-hidden">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-[200px] rounded-2xl object-cover"
                  />
                  <div className="flex flex-col gap-2 p-4 overflow-hidden">
                    <span className="font-semibold text-[26px]">{item.title}</span>
                    <span className="text-left text-sm text-gray-600 line-clamp-6">
                      {item.description}
                    </span>
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
