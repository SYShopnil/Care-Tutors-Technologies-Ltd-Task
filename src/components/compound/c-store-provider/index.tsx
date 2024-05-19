"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { todoStore, AppStore } from "../../../lib/store/store";

export default function CStoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = todoStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
