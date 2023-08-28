import { addToCart, cartTable, db } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";

import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";

// import { auth } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";

/* 
export const GET = async (request: NextRequest) => {
  const req = request.nextUrl;

  const uid = req.searchParams.get("user_id") as string;
  try {
    const res = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.user_id, uid));
    return NextResponse.json({ res });
  } catch (error) {
    return NextResponse.json({ message: "something went wrong" });
  }
}; */

export const GET = async (
  request: NextRequest,
  { params: { userId } }: { params: { userId: string } }
) => {
  if (!userId) {
    return NextResponse.json({ message: "Invalid User ID" });
  }
  try {
    const res = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.user_id, userId));
    const cartItems = res.map((item) => ({
      _id: item.product_id,
      name: item.product_name,
      price: item.price,
      totalPrice: item.price * item.quantity,
      subcat: item.subcat,
      image: item.image,
      userId: item.user_id,
      quantity: item.quantity,
    }));
    const totalQuantity = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const totalAmount = cartItems.reduce(
      (total, item) => total + item.totalPrice,
      0
    );
    return NextResponse.json({ cartItems, totalQuantity, totalAmount });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      Message: (error as { message: string }).message,
    });
  }
};

export const POST = async (request: NextRequest) => {
  // const { userId } = auth();
  const uid = uuid();
  const setCookies = cookies();

  if (!setCookies.has("user_id")) {
    setCookies.set("user_id", uid);
  }

  let userId = setCookies.get("user_id")?.value as string;

  const req: addToCart = await request.json();

  try {
    if (req) {
      const res = await db
        .insert(cartTable)
        .values({
          user_id: userId as string,
          product_id: req.product_id,
          quantity: req.quantity,
          image: req.image,
          price: req.price,
          product_name: req.product_name,
          subcat: req.subcat,
          total_price: req.price * req.quantity,
        })
        .returning();
      return NextResponse.json({ res });
    } else {
      throw new Error("Failed to insert Data");
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      Message: "Something went wrong",
    });
  }
};

export const PUT = async (request: NextRequest) => {
  const uid = uuid();
  const setCookies = cookies();

  if (!setCookies.has("user_id")) {
    setCookies.set("user_id", uid);
  }

  let userId = setCookies.get("user_id")?.value as string;

  // const { userId } = auth();

  const req: addToCart = await request.json();

  try {
    if (req) {
      const res = await db
        .update(cartTable)
        .set({
          quantity: req.quantity,
          total_price: req.price,
        })
        .where(
          and(
            eq(cartTable.user_id, userId as string),
            eq(cartTable.product_id, req.product_id)
          )
        )
        .returning();
      return NextResponse.json({ res });
    } else {
      throw new Error("Failed to update Data");
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      Message: "Something went wrong",
    });
  }
};

export const DELETE = async (
  request: NextRequest,
  { params: { productId } }: { params: { productId: string } }
) => {
  // const { userId } = auth();
  const uid = uuid();
  const setCookies = cookies();

  if (!setCookies.has("user_id")) {
    setCookies.set("user_id", uid);
  }

  let userId = setCookies.get("user_id")?.value as string;

  try {
    if (productId && userId) {
      const res = await db
        .delete(cartTable)
        .where(
          and(
            eq(cartTable.user_id, userId as string),
            eq(cartTable.product_id, productId)
          )
        )
        .returning();
      return NextResponse.json({
        Message: "Item removed from Cart",
      });
    } else {
      if (productId) {
        throw new Error("Please Login");
      } else {
        throw new Error("Incorrect Product Id");
      }
    }
  } catch (error) {
    return NextResponse.json((error as { message: string }).message);
  }
};
/* export const POST = async (request: NextRequest) => {
  const req = await request.json();

  const uid = uuid();
  const setCookies = cookies();

  if (!setCookies.has("user_id")) {
    setCookies.set("user_id", uid);
  }

  let user_id = setCookies.get("user_id")?.value as string;

  try {
    const res = await db
      .insert(cartTable)
      .values({
        product_id: req.product_id,
        quantity: 1,
        user_id: user_id,
      })
      .returning();
    return NextResponse.json({ res });
  } catch (error) {
    return NextResponse.json({ message: "something went wrong" });
  }
}; */
