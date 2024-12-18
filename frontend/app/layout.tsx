import type { Metadata } from "next";
import "./globals.scss";

import NavBar from "../components/layout/navBar/navBar";
import ImageBg from "@/components/elements/Imagebg/Imagebg"
import { AuthProvider } from "@/context/AuthContext";


export const metadata: Metadata = {
  title: "Halloween",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <AuthProvider>
      <html lang="en">
        <body className="bg-background">
          <NavBar />
            {children}
          <ImageBg />
        </body>
      </html>
    </AuthProvider>
  );
}
