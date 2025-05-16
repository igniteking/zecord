"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const user = {};
const Navbar = () => {
  const Router = useRouter();
  return (
    <header className="navbar">
      <nav>
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={32}
            height={32}
          ></Image>
          <h1>Zecord</h1>
        </Link>
        {user && (
          <figure>
            <button
              onClick={() => {
                Router.push("/profile/123");
              }}
            >
              <Image
                src="/assets/images/dummy.jpg"
                alt="user"
                width={36}
                height={36}
                className="rounded-full aspect-square"
              ></Image>
            </button>
            <button className="cursor-pointer">
              <Image
                src="/assets/icons/logout.svg"
                alt="logout"
                width={24}
                height={24}
                className="rotate-180"
              ></Image>
            </button>
          </figure>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
