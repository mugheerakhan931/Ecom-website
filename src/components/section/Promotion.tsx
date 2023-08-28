import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import Image from "next/image";

import React from "react";

const Promotion = () => {
  return (
    <>
      <section className="sm:py-24 py-8 2xl:px-32 xl:px-24 md:px-16 px-8">
        <h4 className="text-center text-blue-600 text-sm font-semibold pb-3.5">
          PROMOTIONS
        </h4>
        <h2 className="text-center text-3xl font-bold pb-8">
          Our Promotions Events
        </h2>
        <div className="flex lg:flex-row flex-col gap-4">
          <div className="flex-1 space-y-4 lg:mr-4">
            <div className="flex items-center justify-between bg-[#d6d6d8] px-8">
              <div>
                <h2 className="text-3xl font-semibold">
                  GET UP TO <span className="text-4xl font-bold">60%</span>
                </h2>
                <h3 className="text-lg">For the summer season</h3>
              </div>

              <Image
                className="place-self-end xl:mr-8  h-196"
                src={"/images/event1.webp"}
                alt="event1"
                width={260}
                height={200}
              />
            </div>
            <div className="text-white text-center bg-black/90 min-[450px]:px-8 px-2 py-8 pt-12">
              <h2 className="text-4xl font-semibold">GET 30% Off</h2>
              <h5 className="text-sm mt-4 mb-1">USE PROMO CODE</h5>
              <h3 className="mx-auto bg-[#474747] font-semibold w-fit tracking-[0.3rem] min-[450px]:px-12 px-2 py-1.5 rounded-lg">
                DINEWEEKENDSALE
              </h3>
            </div>
          </div>

          <div className="flex sm:flex-row flex-col gap-4">
            <div className="flex-1 flex flex-col justify-between bg-[#efe1c7] pt-6">
              <div className="pl-4">
                <h4>Flex Sweatshirt</h4>
                <p className="flex items-end gap-x-3">
                  <span className="line-through">$100.00</span>
                  <span className="text-lg font-semibold">$75.00</span>
                </p>
              </div>
              <Image
                className="mx-auto h-80"
                src={"/images/event2.webp"}
                alt="event2"
                width={282}
                height={362}
              />

              {/* <img alt="" loading="lazy" width="282" height="362" decoding="async" data-nimg="1" class="mx-auto h-80" style="color:transparent" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent2.44f01f1d.png&amp;w=384&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent2.44f01f1d.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent2.44f01f1d.png&amp;w=640&amp;q=75"> */}
            </div>
            <div className="flex-1 flex flex-col justify-between bg-[#d6d6d8] pt-6">
              <div className="pl-4">
                <h4>Flex Push Button Bomber</h4>
                <p className="flex items-end gap-x-3">
                  <span className="line-through">$225.00</span>
                  <span className="text-lg font-semibold">$190.00</span>
                </p>
              </div>

              <Image
                className="mx-auto h-80"
                src={"/images/event3.webp"}
                alt="event3"
                width={282}
                height={362}
              />

              {/* <img alt="" loading="lazy" width="282" height="368" decoding="async" data-nimg="1" class="mx-auto h-80" style="color:transparent" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent3.f6943828.png&amp;w=384&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent3.f6943828.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent3.f6943828.png&amp;w=640&amp;q=75"> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Promotion;
