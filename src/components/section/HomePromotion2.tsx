import React from "react";

import Image from "next/image";

const HomePromotion2 = () => {
  return (
    <>
      <section className="mt-10 flex flex-col items-end">
        <h1 className="max-w-[720px] z-10 sm:text-[2.75rem] text-[2.50rem] font-bold tracking-wide leading-tight 2xl:mx-36 xl:mx-24 md:mx-16 mx-8 -mb-8">
          Unique and Authentic Vintage Designer Jewelry
        </h1>
        <div className="flex xl:flex-row flex-col bg-[#fbfcff] sm:py-16 2xl:px-32 xl:px-24 md:px-16 px-8">
          <div className="flex-1 relative items-center justify-between grid grid-cols-2 max-xl:-x-4 max-xl:gap-y-8 xl:mt-0 md:mt-4 sm:mt-8 mt-16 max-xl:mb-16">
            <div className="xl:w-2/3 w-11/12">
              <h2 className="text-lg leading-tight font-semibold">
                Using Good Quality Materials
              </h2>
              <p className="mt-2 text-black/80 font-light">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className="xl:w-2/3 w-11/12">
              <h2 className="text-lg leading-tight font-semibold">
                100% Handmade Products
              </h2>
              <p className="mt-2 text-black/80 font-light">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className="xl:w-2/3 w-11/12">
              <h2 className="text-lg leading-tight font-semibold">
                Modern Fashion Design
              </h2>
              <p className="mt-2 text-black/80 font-light">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className="xl:w-2/3 w-11/12">
              <h2 className="text-lg leading-tight font-semibold">
                Discount for Bulk Orders
              </h2>
              <p className="mt-2 text-black/80 font-light">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <h1 className="absolute xl:max-w-2xl xl:text-[7rem] sm:text-8xl text-7xl leading-none font-black opacity-5">
              Different From Others
            </h1>
          </div>
          <div className="flex-1 sm:flex-row flex-col flex items-center gap-10">
            <Image
              src={"/images/feature.webp"}
              alt="feature"
              width={300}
              height={350}
            />
            {/* <img alt="" loading="lazy" width="325" height="400" decoding="async" data-nimg="1" className="w-[300px] h-[350px]" style="color:transparent" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature.4995b81f.png&amp;w=384&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature.4995b81f.png&amp;w=750&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature.4995b81f.png&amp;w=750&amp;q=75"> */}
            <div className="space-y-4">
              <p className="leading-relaxed font-light">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </p>
              <button className="flex justify-center items-center bg-black text-sm text-white font-semibold px-16 py-2.5">
                See All Product
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePromotion2;
