import { defineType, defineField } from "sanity";

export const category = defineType({
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
});

/* export const category = {
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
  ],
}; */
