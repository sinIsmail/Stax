import "../global.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "./../components/Header" 

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" className="dark"
    >
      
      <body ><Header/>{children}</body>
    </html>
  );
}
