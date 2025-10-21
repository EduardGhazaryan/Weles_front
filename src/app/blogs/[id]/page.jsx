"use client"
import Header from "@/components/header/Header";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { allBlogs } from "@/utils/blogs";
import Image from "next/image";

export default function BlogDetails({ params }) {
  const blog = allBlogs.find((b) => b.id === parseInt(params.id));
  console.log({allBlogs,params : params.id});

  if (!blog) {
    return <div className="py-20 text-center text-gray-500">Blog not found</div>;
  }

  return (
    <div className="overflow-x-hidden">

    <div className="max-w-6xl mx-auto py-16 px-4 md:px-8">
      <h1 className="text-4xl font-bold mb-6">{blog?.title}</h1>

      <p className="text-gray-500 mb-4">
        {blog?.date} | by{" "}
        <span className="text-green-600 font-medium">{blog?.author}</span> |{" "}
        <a href="#" className="text-green-600 underline">
          {blog?.comments} comments
        </a>
      </p>

      {blog?.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="rounded-lg mb-8 w-[100%] h-[600px]"
        />
      )}

      <div>
        {
            blog.description
        }
      </div>

      <div className="mt-10">
        <a
          href="/blogs"
          className="bg-gray-100 px-6 py-2 rounded-full hover:bg-gray-200"
        >
          ← Back to Blogs
        </a>
      </div>
    </div>
    
  </div>

  );
}
