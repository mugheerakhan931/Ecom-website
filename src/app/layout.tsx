import Navbar from "@/components/section/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/section/Footer";
import Provider from "@/lib/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dine Market",
  description: "Ecommerce Clothing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
