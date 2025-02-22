"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import logo1 from "../../../../public/images/logo.svg";
import logo2 from "../../../../public/images/logo-white.svg";
import Image from "next/image";
export default function Navbar() {
  const pathname = usePathname();
  const isSocialRoute = pathname.startsWith("/social");

  return (
    <>
      {!isSocialRoute && pathname !== "/" && (
        <nav className="navbar navbar-expand-lg shadow-none">
          <div className="container">
            <Link className="navbar-brand text-center w-100 mt-2" href="/">
              <Image
                src={
                  pathname === "/signup" || pathname === "/signin"
                    ? logo1
                    : logo2
                }
                alt="logo"
                width={130}
              />
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}
