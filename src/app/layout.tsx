import type { Metadata } from "next";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./_components/BootstrapClient";
import "./globals.css";
import Navbar from "./_components/Navbar/Navbar";


export const metadata: Metadata = {
  title: "Link UP - Connect, Share & Engage",
  description:
    "Join Link UP, the ultimate social platform to connect with friends, share experiences, and discover new communities. Stay engaged with real-time conversations and trending topics. Your world, your network – all in one place.",
  icons: {
    icon: "/favicon.png", // Standard favicon
    shortcut: "/favicon.png",
    apple: "/favicon.png", // Optional for Apple devices
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` gradient-background`}>
        <Navbar />
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
