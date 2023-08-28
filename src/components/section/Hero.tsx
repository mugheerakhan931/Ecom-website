import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="grid grid-cols gap-x-16 lg:grid-cols-2 lg:gap-x-16 sm:py-8 2xl:px-32 xl:px-24 md:px-16 px-8 relative gap-y-10 lg:gap-y-0">
        <div className="grid pt-12 py-2 gap-y-10">
          <Label
            htmlFor="sale"
            className="bg-blue-100 text-blue-600 font-bold w-fit rounded-md px-5 text-xl py-2"
          >
            Sale 70%
          </Label>
          <h1 className="flex-wrap scroll-m-20 text-5xl font-bold tracking-tight lg:font-semibold lg:text-7xl">
            An Industrial Take on Streetwear
          </h1>
          <p className="text-slate-600 max-w-lg flex-wrap">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>

          <Button className="lg:w-fit min-[410px]:w-2/4 w-3/4 flex justify-center items-center gap-x-3 bg-black text-white font-semibold sm:px-16 px-2 py-5">
            <ShoppingCart className="mr-2 h-5 w-5" /> Start Shopping
          </Button>

          <div className=" grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-auto">
            <Image
              src={"/images/banner-btm-logo-1.webp"}
              alt="banner"
              width={100}
              height={35}
            />

            <Image
              src={"/images/banner-btm-logo-2.webp"}
              alt="banner"
              width={100}
              height={35}
            />

            <Image
              src={"/images/banner-btm-logo-3.webp"}
              alt="banner"
              width={100}
              height={35}
            />

            <Image
              src={"/images/banner-btm-logo-4.webp"}
              alt="banner"
              width={100}
              height={35}
            />
          </div>
        </div>
        <div className="">
          <div className="bg-[#ffece3] rounded-full w-full h-[400px] lg:w-[600px] lg:h-[600px]">
            <Image
              className="absolute justify-evenly lg:top-0 w-auto h-[395px] lg:w-[650px] lg:h-[650px]"
              src={"/images/header.webp"}
              alt="banner"
              width={628}
              height={604}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
