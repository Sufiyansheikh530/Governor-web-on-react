import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Component } from "react";
import Footer from "@/components/Footer"
import { Roboto } from "next/font/google"
const roboto = Roboto ({
  weight: ["300" , "400" , "700" , "900"],
  subsets:["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Governor Initiative",
  description: "Governor Initiative for Artificial Intelligence, Web 3.0 and Metaverse",
  icons :{
    icon:{url: "/logo.png", type: "image/png"}
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}
      > 
        
        <div 
        >
          <Navbar />
          {children}
          
          </div>
        <Footer />
        </body>
    </html>
  );
}
