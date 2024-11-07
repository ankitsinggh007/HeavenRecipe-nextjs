import Mealsgrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import React, { Suspense } from "react";


export const metadata={
  title: "Delicious Meals - Cooking with passion",
  description: "Discover delicious meals created by you. Share your favorite recipes and cook them yourself."
}

async function Meals() {
  const meals = await getMeals();
  return <Mealsgrid meals={meals} />;
}


async function Mealspage() {
  return (
    <>
      <header className="gap-10 flex flex-col mx-auto mt-12 leading-10 w-11/12  mb-12 ">
        <h1 className=" font-montserrat font-bold text-4xl">
          Delicious meals,created{" "}
          <span className=" bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent   ">
            by you
          </span>
        </h1>
        <p className="m-0 text-2xl text-gray-300">
          Choose your favourite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className="cta">
          <Link
            className="
          inline-block mt-3 px-2 py-4 tracking-wide text-xl rounded-md bg-custom-background text-[#ffffff] font-bold decoration-none   "
            href="/meals/share"
          >
            Share Your favorite Recipe
          </Link>
        </p>
      </header>

      <main className="main">
        <Suspense
          fallback={
            <div className="text-center animate-loading">
              fetching meals....
            </div>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

export default Mealspage;
