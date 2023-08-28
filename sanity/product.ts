// import { StaticImageData } from "next/image";

export const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    },
    {
      name: "tagline",
      title: "TagLine",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "image",
      title: "Images",
      type: "array",
      of: [
        {
          name: "img",
          title: "Image",
          type: "image",
        },
      ],
    },
  ],
};
