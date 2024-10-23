"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

export default function ImageSlideshow() {
  const active =
    "absolute top-0 left-0 object-cover w-[40rem] h-[28rem] transform scale-110 -translate-x-4 -rotate-6  transition-all duration-500 ease-in-out will-change-transform";

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className=" w-full h-[24rem] p-4  bg-black relative  top-0 left-0 rounded-md overflow-hidden 
 "
    >
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? active : ""}
          alt={image.alt}
        />
      ))}
      <div className="absolute top-0 left-0 inset-0 w-[41rem] h-[26rem] "></div>
    </div>
  );
}
