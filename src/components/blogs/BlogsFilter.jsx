"use client";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "@/features/blogs/blogsSlice";

export default function BlogsFilter() {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.blogs);

  return (
    <aside className="w-[100%] pl-6">

      <div className="mb-8">
        <input
          type="text"
          placeholder="Search for something..."
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-green-600"
        />
      </div>

 
      {/* <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Popular Categories</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Lorem ipsum (05)</li>
          <li>• Lorem ipsum (12)</li>
          <li>• Lorem ipsum (09)</li>
          <li>• Lorem ipsum (37)</li>
        </ul>
      </div> */}
    </aside>
  );
}
