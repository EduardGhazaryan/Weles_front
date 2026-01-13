import { useSelector } from "react-redux";

export function useLocalized() {
  const locale = useSelector((state) => state.lang.locale);
  
  const get = (obj, field) => {
    if (!obj) return "";
    const key = `${field}_${locale}`;
    return obj[key] || obj[`${field}_am`] || "";
  };

  return { get, locale };
}
