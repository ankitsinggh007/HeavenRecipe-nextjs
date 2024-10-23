import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import Nav from "./navLink";

const Navbar = () => {
  return (
    <header className="flex z-24 mb-32  relative justify-center items-center p-5 text-[2rem] gap-2 sm:gap-72 text-orange-100">
      <Link href="/" className="flex gap-2 sm:gap-20  items-center">
        <Image
          src={logo}
          className=" w-16 sm:w-24 rounded-full shadow-md"
          alt="the plate with full of food"
          priority
          placeholder="blur"
        />

        <h1 className="hover:text-orange-300 hover:drop-shadow-[0_0_10px_orange]">
          RecipeHaven
        </h1>
      </Link>

      <nav>
        <ul className="flex gap-28">
          <li>
            <Nav href="/meals">Meals</Nav>
          </li>

          <li>
            <Nav href="/community">Foddies Community</Nav>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
