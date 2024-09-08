"use client";
import { useData } from "@/hooks/useData";
import { Data } from "@/models";
import { createContext } from "react";

interface Props {
  children: React.ReactNode;
}

export const DataContext = createContext<Data | null>(null);

export const DataProvider: React.FC<Props> = ({ children }) => {
  const { data } = useData();
  console.log("data-context", data);
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
