import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import AppContext from "@/components/shared/context/AppContext";
import React from "react";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const nunito = Nunito({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  	title: "Cтудия мебели Astron",
  	description: "Cайт ресселер по продаже мебели",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
      <html
		  lang="en"
		  className={cn("h-full", "antialiased", nunito.variable, "font-sans", inter.variable)}
    	>
      		<body
				className={`min-h-screen bg-white rounded-2xl ${nunito.variable} text-black`}
			>
				<AppContext>
					{children}
				</AppContext>
			  </body>
	  </html>
  );
}
