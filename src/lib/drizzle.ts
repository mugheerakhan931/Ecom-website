import { pgTable, varchar, integer, serial, text } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { InferModel } from "drizzle-orm";

// for user Registration

/* export const cartTable = pgTable("cart", {
  id: serial("id").primaryKey(),
  user_id: varchar("user_id", {
    length: 255,
  }).notNull(),
  product_id: varchar("product_id", {
    length: 255,
  }).notNull(),
  quantity: integer("quantity").notNull(),
});

export const db = drizzle(sql); */

export const cartTable = pgTable("cart", {
  id: serial("id").primaryKey().notNull(),
  user_id: varchar("user_id", { length: 255 }).notNull(),
  product_id: varchar("product_id", { length: 255 }).notNull(),
  product_name: varchar("product_name", { length: 255 }).notNull(),
  subcat: varchar("subcat", { length: 255 }).notNull(),
  image: text("image").notNull(),
  price: integer("price").notNull(),
  quantity: integer("quantity").notNull(),
  total_price: integer("total_price").notNull(),
});

export type Cart = InferModel<typeof cartTable>;
export type addToCart = InferModel<typeof cartTable, "insert">; // insert type

/* export const userTable = pgTable("cart", {
  id: serial("id").primaryKey().notNull(),
  user_id: varchar("user_id", { length: 255 }).notNull(),
  product_id: varchar("product_id", { length: 255 }).notNull(),
  product_name: varchar("product_name", { length: 255 }).notNull(),
  subcat: varchar("subcat", { length: 255 }).notNull(),
  image: text("image").notNull(),
  price: integer("price").notNull(),
  quantity: integer("quantity").notNull(),
  total_price: integer("total_price").notNull(),
});

export type User = InferModel<typeof userTable>;
export type registerUser = InferModel<typeof userTable, "insert">; // insert type */

export const db = drizzle(sql);
