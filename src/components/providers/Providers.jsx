"use client";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import I18nProvider from "../i18n/I18nProvider";

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <I18nProvider>{children}</I18nProvider>
    </Provider>
  );
}
