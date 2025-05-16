"use client";
import Image from "next/image";
import React, { useState } from "react";

const DropDownist = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="relative">
      <div
        className="cursor-pointer"
        onClick={() => {
          setisOpen(!isOpen);
        }}
      >
        <div className="filter-trigger">
          <figure>
            <Image
              src="/assets/icons/hamburger.svg"
              alt="menu"
              width={14}
              height={14}
            ></Image>
            Most Recent
            <Image
              src="/assets/icons/arrow-down.svg"
              alt="arrow-down"
              width={20}
              height={20}
            ></Image>
          </figure>
        </div>
        {isOpen && (
          <ul className="dropdown">
            {[
              "Most Recent",
              "Most Popular",
              "Most Liked",
              "Most Commented",
            ].map((item, index) => (
              <li key={index} className="list-item">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDownist;
