"use client";

import { useContext } from "react";
import Card from "@/components/Card";
import { DataContext } from "@/context/DataContext";

export default function CEOs() {
  const data = useContext(DataContext);
  return (
    <div className="flex flex-row flex-wrap w-full max-w-[1128px]">
      {data?.people.map((item) => {
        const country = data.countries.find(
          (country) => country.cca2.toLocaleLowerCase() === item.country
        );
        return <Card key={item.about} item={item} country={country} />;
      })}
    </div>
  );
}
