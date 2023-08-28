import ProductCard from "@/components/section/ProductCard";
import { products } from "@/utils/mock";

const allproducts = () => {
  return (
    <>
      <div className="grid grid-cols gap-x-16 lg:grid-cols-4 md:grid-cols-3 lg:gap-x-20 sm:py-8 2xl:px-32 xl:px-24 md:px-16 px-8 relative gap-y-10 lg:gap-y-20">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            title={item.name}
            price={item.price}
            imgsrc={item.imgsrc}
          />
        ))}
      </div>
    </>
  );
};

export default allproducts;
