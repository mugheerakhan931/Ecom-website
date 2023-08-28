import { StaticImageData } from "next/image";

export type product = {
  id: number;
  name: string;
  tagline: string;
  price: number;
  imgsrc: string | StaticImageData;
  category?: string;
};
