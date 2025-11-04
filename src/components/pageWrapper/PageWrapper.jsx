"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import { getHomePageDatasThunk } from "@/features/global/globalApi";


export default function PageWrapper({ children }) {
  const dispatch = useDispatch();
  const pathname = usePathname();

  useEffect(() => {
    dispatch(getHomePageDatasThunk());
  }, [pathname]); 

  return children;
}
