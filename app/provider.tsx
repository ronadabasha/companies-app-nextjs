"use client";

import { DataProvider } from "@/context/DataContext";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Provider({ children }: Props) {
  return <DataProvider>{children}</DataProvider>;
}
