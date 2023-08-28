import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";

import logo from "/public/logo.png";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
// {/* h-20 px-20 mt-5 mb-5 */}

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-8 2xl:px-32 xl:px-24 md:px-16 px-8">
      <Link href={"./"}>
        <Image src={logo} alt="website logo" width={140} height={140} />
      </Link>
      <div>
        <ul className="flex text-lg gap-x-10 max-lg:hidden font-bold lg:font-semibold">
          <li>
            <Link href={"category/female"}>Female</Link>
          </li>
          <li>
            <Link href={"category/male"}>Male</Link>
          </li>
          <li>
            <Link href={"category/kids"}>Kids</Link>
          </li>
          <li>
            <Link href={"products"}>All Products</Link>
          </li>
        </ul>
      </div>
      <div className="w-1/3 max-w-md flex items-center border rounded-md font-light overflow-hidden pl-2 max-lg:hidden">
        <Search className="bg-white rounded-l" />{" "}
        <input
          type="text"
          placeholder="What you are looking for"
          className="rounded-r grow placeholder-black text-[0.80rem] leading-none px-1 py-1.5"
        ></input>
      </div>
      <div className="p-2 rounded-full bg-gray-300 relative right-2">
        <ShoppingCart className="relative" />
        <span className="absolute top-0 right-0 text-center text-xs w-4 h-4 rounded-full bg-[#f02d34] text-white">
          0
        </span>
      </div>
    </nav>
  );
};

/* 

<NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="space-x-5">
              <NavigationMenuTrigger>Female</NavigationMenuTrigger>
              <NavigationMenuTrigger>Male</NavigationMenuTrigger>
              <NavigationMenuTrigger>Kids</NavigationMenuTrigger>
              <NavigationMenuTrigger>All Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
              </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
*/

export default Navbar;
