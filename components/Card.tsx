import { Company, Country, People } from "@/models";
import ImageContainer from "./ImageContainer";
import { Location } from "./icons";

type Props = {
  item: Company | People;
  country: Country | undefined;
};

export default function Card({ item, country }: Props) {
  console.log("country", country);
  return (
    <div className="relative w-full md:w-[calc(100%/2-16px)] lg:w-[calc(100%/3-16px)] bg-white border border-[rgb(140 140 140 / .25)] p-5 pb-16 rounded-xl mx-4 mb-4 md:m-2">
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
            <span className="block mx-1 font-bold text-xs">
              {country.name.official}
            </span>
          </div>
          <a
            href={country.maps.googleMaps}
            className="flex items-center mx-1 text-blue-900 font-bold text-xs"
          >
            <Location />
            <span className="ml-1">Location</span>
          </a>
        </div>
      )}
    </div>
  );
}
