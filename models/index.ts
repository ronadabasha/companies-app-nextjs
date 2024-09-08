type Flags={
    alt: string,
    png: string,
    svg: string
}

type Maps={
    googleMaps: string,
    openStreetMaps: string
}

type countryNativeName = {
    string: string,
    
}
type countryName = {
    common: string,
    nativeName: countryNativeName,
    official: string
}

export type Country = {
    cca2: string,
    flags: Flags,
    maps: Maps,
    name: countryName
}

export type Company = {
    name: string,
    about: string,
    hq_country: string
}

export type People = {
    name: string,
    about: string,
    country: string
}

export type Data = {
    companies: [Company],
    people: [People],
    countries: [Country],
}

export type ImageContainerType = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	className?: string;
}