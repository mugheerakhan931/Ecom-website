import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const ProductCard = (props: {
  title: string;
  price: number;
  imgsrc: string | StaticImageData;
}) => {
  /* const  handleAddToCart = async()=>{

    const res = fetch("/api/cart",{
      method:"POST",
      body:JSON.stringify({
        product_id : item._id
      })

    })
  
  } */

  return (
    <>
      <Link href={`/products/${props.title.replace(/\s+/g, "-")}`}>
        <Image
          src={props.imgsrc}
          alt="{props.title}"
          width={380}
          height={400}
        />
        <h3 className="text-lg font-medium">{props.title}</h3>
        <h4 className="text-xl font-semibold">${props.price}</h4>
        <button className="border py-2 px-6 rounded bg-blue-600 text-white">
          Add to Cart
        </button>
      </Link>
    </>
  );
};

export default ProductCard;
