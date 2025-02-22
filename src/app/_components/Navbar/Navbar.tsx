import Link from "next/link";
import React from "react";
import logo from "../../../../public/images/logo-white.svg";
import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand text-center w-100 mt-2" href="/">
            <Image src={logo} alt="logo" width={130} />
          </Link>
        </div>
      </nav>
    </>
  );
}
