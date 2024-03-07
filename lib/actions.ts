"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { saveMeal } from "./meals";
import { IMealForm } from "@/types";

function isInvalid(input: string) {
  return !input.trim();
}

export async function saveMealAction(_: any, formData: FormData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  let message = "";

  Object.entries(meal).forEach((entry) => {
    const [key, value] = entry;

    if (key !== "image" && isInvalid(value as string)) {
      message = `Invalid ${key}`;
    }

    if (key === "image" && !(value as File).size) {
      message = "Invalid image";
    }

    if (key === "email" && !(value as string).includes("@")) {
      message = "Invalid email";
    }
  });

  if (message) {
    return { error: message };
  }

  await saveMeal(meal as IMealForm);
  revalidatePath("/meals"); // Remove cache
  redirect("/meals");
}
