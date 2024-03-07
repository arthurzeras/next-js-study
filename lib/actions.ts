"use server";

import { redirect } from "next/navigation";

import { saveMeal } from "./meals";
import { IMealForm } from "@/types";

export async function saveMealAction(formData: FormData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  await saveMeal(meal as IMealForm);
  redirect("/meals");
}
