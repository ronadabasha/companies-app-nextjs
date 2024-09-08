"use client";

import Card from "@/components/Card";
import { DataContext } from "@/context/DataContext";
import { useContext } from "react";

export default function Companies() {
  const data = useContext(DataContext);
  return (
    <div className="flex flex-row flex-wrap w-full max-w-[1128px]">
      {data?.companies.map((item) => {
        const country = data.countries.find(
          (country) => country.cca2.toLocaleLowerCase() === item.hq_country
        );
        return <Card key={item.about} item={item} country={country} />;
      })}
    </div>
  );
}
