import { getMeal } from "@/lib/meals";
import Image from "next/image";
import React from "react";
import classes from "./page.module.css";
import { notFound } from "next/navigation";
function mealsDetailpage({ params }) {
  console.log(params, "param");
  const meal = getMeal(params.mealslug);
  if (!meal) {
    console.log("hy ");
    notFound();
  }

  console.log(meal.instructions.replace(/\n/g, "<br/>"), "instruction");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <div className={classes.instructions}>
          {meal.instructions.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </main>
    </>
  );
}

export default mealsDetailpage;
