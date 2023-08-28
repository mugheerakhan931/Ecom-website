// import ProductCard from "@/components/section/ProductCard";
import Quantity from "@/components/Quantity";
import { products } from "@/utils/mock";
import { client } from "@/lib/sanityClient";

import Image from "next/image";
import { Image as IImage } from "sanity";

const getProductDetails = (name: string) => {
  return products.filter((item) => item.name === name);
};

const sizes = ["xs", "sm", "md", "lg", "xl"];

interface IProduct {
  _id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  tagline: string;
  image: IImage;
}

/* 
category:{
  name:string
}
*/

const getProductData = async (name: string) => {
  const response = await client.fetch(
    `*[_type == "product" && name == "${name}"][0]{      
      _id,
      title,
      category,
      description,
      price,
      tagline,
      image,
    }`
  );
  return response;
};

export default async function Page({ params }: { params: { slug: string } }) {
  const result = getProductDetails(params.slug.replace(/-/g, " "));
  const data: IProduct = await getProductData(params.slug.replace(/-/g, " "));

  console.log("data === ", data);

  const handleAddToCart = async (item_id: any) => {
    const res = fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: item_id,
      }),
    });
  };

  return (
    <>
      <div className="grid grid-cols gap-x-20 sm:py-8 2xl:px-32 xl:px-24 md:px-16 px-8 ">
        Product : {params.slug.replace(/-/g, " ")}
      </div>
      {/* <div className="grid grid-cols gap-x-16 lg:grid-cols-4 md:grid-cols-3 lg:gap-x-20 sm:py-8 2xl:px-32 xl:px-24 md:px-16 px-8 relative gap-y-10 lg:gap-y-20"> */}
      {result.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols gap-x-16 lg:grid-cols-2 md:grid-cols-2 lg:gap-x-20 sm:py-8 2xl:px-32 xl:px-24 md:px-16 px-8 relative gap-y-10 lg:gap-y-20"
        >
          <div>
            <Image
              className=" justify-center"
              src={item.imgsrc}
              alt={item.name}
              width={400}
              height={400}
            />
          </div>
          <div>
            {/* Product Details */}
            <div>
              <h1 className="text-2xl">{item.name}</h1>
              <h2 className="text-base font-semibold text-gray-400">
                {item.tagline}
              </h2>
            </div>
            <div>
              <h3 className="mt-6 text-sm font-semibold"> SELECT SIZE</h3>

              {/* Sizes */}

              <div className="grid grid-flow-col auto-cols-max gap-x-3">
                {sizes.map((size) => {
                  return (
                    <div
                      key={size}
                      className="grid w-6 h-6 items-center justify-center mt-2 duration-300 border rounded-full hover:shadow-xl"
                    >
                      <span className="text-[10px] font-semibold text-center text-gray-600">
                        {size}
                      </span>
                    </div>
                  );
                })}
              </div>
              {/* Quantity */}

              <div className="grid gap-x-3">
                <h3 className="text-sm font-semibold">Quantity</h3>
                <Quantity />
              </div>

              {/* Add to Cart */}

              <button
                onClick={() => handleAddToCart(item.id)}
                className="border py-2 px-6 rounded bg-blue-600 text-white"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* </div> */}
    </>
  );
}

{
  /* <ProductCard
              key={item.id}
              title={item.name}
              price={item.price}
              imgsrc={item.imgsrc}
            /> */
}
