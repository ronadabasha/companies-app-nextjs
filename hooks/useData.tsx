import { useEffect, useState } from "react";
import { Company, Data, People } from "@/models";

const getCountriesCodes = (data: Data) => {
  const companiesCountries: string[] = data.companies.map(
    (item: Company) => item.hq_country
  );
  const peopleCountries: string[] = data.people.map(
    (item: People) => item.country
  );
  const allCountries = [...companiesCountries, ...peopleCountries];
  const countries = [...new Set(allCountries)];
  return countries;
};

const getCountries = async (countries: string[]) => {
  try {
    const response =
      await fetch(`https://restcountries.com/v3.1/alpha?codes=${countries.toString()}&fields=flags,maps,name,cca2
`);
    const result = await response.json();
    console.log("result-countries", result);
    return result;
  } catch (err) {
    console.log("err", err);
  }
  return [];
};

export const useData = () => {
  const [data, setData] = useState<Data | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const result = await response.json();
        const countriesCodes = getCountriesCodes(result);
        console.log("result", result);
        result.countries = await getCountries(countriesCodes);

        setData(result);
      } catch (err) {
        console.log("err", err);
        setError(err + "");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { data, isLoading, error };
};
