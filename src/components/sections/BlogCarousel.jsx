"use client";
import { useState } from "react";
import { CarouselSlide } from "../carousel/CarouselSlide";

const posts = [
  {
    id: 1,
    title: "Lorem Ipsum is a dummy",
    date: "July 30,2025",
    excerpt: "Short excerpt...",
  },
  {
    id: 2,
    title: "Lorem Ipsum is a dummy",
    date: "July 29,2025",
    excerpt: "Short excerpt...",
  },
  {
    id: 3,
    title: "Lorem Ipsum is a dummy",
    date: "July 22,2025",
    excerpt: "Short excerpt...",
  },
];

export default function BlogCarousel() {
  const [focus, setFocus] = useState(1);
  return (
    <div id="blogs" className="container mx-auto text-center px-[50px]">
      <h3 className="text-2xl font-medium mb-8">Latest Blog</h3>
      <div className="w-full min-h-[300px]">
        {/* {posts.map((p) => (
          <div
            key={p.id}
            onClick={() => setFocus(p.id)}
            className={`w-80 p-4 rounded transition-transform ${
              focus === p.id
                ? "bg-primary text-white transform -translate-y-2"
                : "bg-white text-black"
            } card-shadow`}
          >
            <div className="text-xs text-left">{p.date}</div>
            <h4 className="mt-2 font-semibold">{p.title}</h4>
            <p className="mt-2 text-sm">{p.excerpt}</p>
          </div>
        ))} */}

<CarouselSlide/>
      </div>
    </div>
  );
}
