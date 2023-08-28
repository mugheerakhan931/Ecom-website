"use client";
import Image from "next/image";

// import { useRef, useEffect } from "react";
// import { register } from "swiper/element/bundle";
// register();

// import Swiper core and required modules
import { Mousewheel, Autoplay } from "swiper/modules";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import ProductCard from "@/components/section/ProductCard";
import { products } from "@/utils/mock";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// navigation
// pagination={{ clickable: true }}
// scrollbar={{ draggable: true }}
// Navigation, Pagination, Scrollbar, A11y,

const HomeProducts = () => {
  const params = {
    modules: [], // Array of Swiper modules
    spaceBetween: 20,
    slidesPerView: 3,
    Autoplay: true,
    Mousewheel: true,
    onSwiper: (swiper: any) => console.log(swiper),
    onSlideChange: () => console.log("Slide change!"),
  };

  return (
    <>
      <section className="lg:pt-8 sm:pb-24 2xl:px-32 xl:px-24 md:px-16 px-8">
        <h4 className="text-center text-blue-600 text-sm font-semibold pb-3.5">
          PRODUCTS
        </h4>
        <h2 className="text-center text-3xl font-bold sm:pb-8 pb-4">
          Check What We Have
        </h2>
        <div className="py-8">
          <Swiper {...params}>
            {products.map((item) => (
              <SwiperSlide key={item.id}>
                <ProductCard
                  title={item.name}
                  price={item.price}
                  imgsrc={item.imgsrc}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default HomeProducts;

{
  /* 
    <img alt="" loading="lazy" width="380" height="400" decoding="async" data-nimg="1" style="color:transparent" src="https://cdn.sanity.io/images/mzpo8nrw/production/d8cbcd5d002fade4d83dc66f910f34ae84d61975-278x296.png">
    <img alt="" loading="lazy" width="380" height="400" decoding="async" data-nimg="1" style="color:transparent" src="https://cdn.sanity.io/images/mzpo8nrw/production/994bf21135a265d4bbeff47cd8fddae6082a0b26-370x394.png">
    <img alt="" loading="lazy" width="380" height="400" decoding="async" data-nimg="1" style="color:transparent" src="https://cdn.sanity.io/images/mzpo8nrw/production/2228e40aa700a68031eff4016f9e625ade813a89-278x296.png">
    <img alt="" loading="lazy" width="380" height="400" decoding="async" data-nimg="1" style="color:transparent" src="https://cdn.sanity.io/images/mzpo8nrw/production/a6a38f6a1f31dafe5f3294a4384f865b7d25a344-370x394.png">
    <img alt="" loading="lazy" width="380" height="400" decoding="async" data-nimg="1" style="color:transparent" src="https://cdn.sanity.io/images/mzpo8nrw/production/ffc858fc182553bee2aaff34fe728bf07d15f2b5-278x296.png">
    <img alt="" loading="lazy" width="380" height="400" decoding="async" data-nimg="1" style="color:transparent" src="https://cdn.sanity.io/images/mzpo8nrw/production/bfd5b4b468e1a6c84c25589fae1a103cac342102-278x296.png">
    <img alt="" loading="lazy" width="380" height="400" decoding="async" data-nimg="1" style="color:transparent" src="https://cdn.sanity.io/images/mzpo8nrw/production/bf4d73c91b7c7c2875fbfbb8e1a9c8113c82e90a-370x394.png">
    <img alt="" loading="lazy" width="380" height="400" decoding="async" data-nimg="1" style="color:transparent" src="https://cdn.sanity.io/images/mzpo8nrw/production/4e2ed6a9eaa6e1413843e53f3113ccfd2104c301-278x296.png">
    style="width: 542.333px; margin-right: 10px;"


    
          swiper swiper-initialized swiper-horizontal
          <Swiper
            modules={[Autoplay, Mousewheel]}
            spaceBetween={50}
            slidesPerView={3}
            Autoplay: true
            Mousewheel
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >

<SwiperSlide>
              <ProductCard
                title="Muscle Tank"
                price={75}
                imgsrc="/images/product-1.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                title="Brushed Bomber"
                price={225}
                imgsrc="/images/product-2.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                title="Raglan Sweatshirt"
                price={195}
                imgsrc="/images/product-3.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                title="Brushed Raglan Sweatshirt"
                price={195}
                imgsrc="/images/product-4.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                title="Cameryn Sash Tie Dress"
                price={545}
                imgsrc="/images/product-5.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                title="Imperial Alpaca Hoodie"
                price={525}
                imgsrc="/images/product-10.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                title="Flex Sweatshirt"
                price={175}
                imgsrc="/images/product-6.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                title="Flex Push Button Bomber"
                price={225}
                imgsrc="/images/product-11.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                title="Flex Sweatpants"
                price={175}
                imgsrc="/images/product-7.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                title="Pink Fleece Sweatpants"
                price={195}
                imgsrc="/images/product-8.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                title="Lite Sweatpants"
                price={148}
                imgsrc="/images/product-9.png"
              />
            </SwiperSlide>

    
  */
}
