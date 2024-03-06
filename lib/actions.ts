"use server";

import { IMealForm } from "@/types";
import { saveMeal } from "./meals";

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
}
