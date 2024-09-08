import Image from "next/image";
import { ImageContainerType } from "@/models";

function ImageContainer({
  src,
  alt,
  width = 40,
  height = 20,
  ...props
}: ImageContainerType) {
  return <Image src={src} alt={alt} width={width} height={height} {...props} />;
}

export default ImageContainer;
