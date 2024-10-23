import React from "react";
import Mealitems from "./meal-items";

function Mealsgrid({ meals }) {
  return (
    <ul className="w-[90%] max-w-[90rem] grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-[5rem] my-[2rem] mx-auto list-none p-0">
      {meals.map((meal) => (
        <li key={meal.id}>
          <Mealitems {...meal} />
        </li>
      ))}
    </ul>
  );
}

export default Mealsgrid;
