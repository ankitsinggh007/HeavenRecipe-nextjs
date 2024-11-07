"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export const   shareMeal = async (formData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    image: formData.get("image"),
  };
  if(meal.title!=""){
    return {
      message:'ivalid input'
    }
  }


  await saveMeal(meal);
  // revalidatePath('/meals')
  redirect('/meals')
};
