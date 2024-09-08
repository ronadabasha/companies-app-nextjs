import { Company, Country, People } from "@/models";
import ImageContainer from "./ImageContainer";

type Props = {
  item: Company | People;
  country: Country | undefined;
};

export default function Card({ item, country }: Props) {
  console.log("country", country);
  return (
    <div className="relative w-[calc(100%/3-16px)] bg-white border border-[rgb(140 140 140 / .25)] p-5 pb-10 rounded-xl m-2">
      <h1 className="font-bold mb-4 text-lg">{item?.name}</h1>
      <p className="text-black opacity-60 text-sm mb-4">{item?.about}</p>
      {country && (
        <div className="absolute bottom-5 left-0 flex w-full items-center justify-between px-5">
          <div className="flex items-center">
            <ImageContainer
              src={country?.flags.svg}
              alt={country.name.common}
              className="w-[40px] border border-[rgb(140 140 140 / .25)] mx-1"
            />
            <span className="block mx-1 text-sm">{country.name.official}</span>
          </div>
          <a
            href={country.maps.googleMaps}
            target="_blank"
            className="block mx-1 text-blue-900 font-bold text-sm"
          >
            Location
          </a>
        </div>
      )}
    </div>
  );
}
