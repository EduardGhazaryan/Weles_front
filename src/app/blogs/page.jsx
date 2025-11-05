'use client'
import { useState } from "react";
import BlogsFilter from "@/components/blogs/BlogsFilter";
import BlogsList from "@/components/blogs/BlogsList";
import { useTranslation } from "react-i18next";


export default function BlogsPage() {
  const [showFilter, setShowFilter] = useState(false);
  const {t} = useTranslation()


  return (
    <div className="overflow-x-hidden relative">
      <section>
          <h1 className="text-[20px] sm:text-[50px] font-bold bg-black text-white text-center p-[30px] sm:p-[50px]">
              {t("blogs.ourBlogs")}
          </h1>

        <div className="md:hidden flex justify-end px-6 py-4">
          <button
            onClick={() => setShowFilter(true)}
            className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full text-gray-700 hover:bg-gray-100"
          >

            Filter
          </button>
        </div>

        <div className="container flex">
          <div className="md:w-[75%] w-[100%] min-h-[500px] py-[100px]">
            <BlogsList />
          </div>

          <div className="md:w-[25%] md:block hidden min-h-[500px] py-[100px]">
            <BlogsFilter />
          </div>
        </div>
      </section>

      {/* Side filter for mobile */}
      {showFilter && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-end">
          <div className="bg-white w-[80%] sm:w-[400px] h-full p-6 overflow-y-auto shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setShowFilter(false)}
                className="text-gray-600 text-2xl leading-none"
              >
                &times;
              </button>
            </div>
            <BlogsFilter />
          </div>
        </div>
      )}
    </div>
  );
}
