import { createClient } from "next-sanity";

export const client = createClient({
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  apiVersion: "2023-07-09",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
});