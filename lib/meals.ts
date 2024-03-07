import fs from "node:fs";

import xss from "xss";
import slugify from "slugify";
import Database from "better-sqlite3";

import { IMeal, IMealForm } from "@/types";

const db = Database("meals.db");

export function getMeals() {
  // throw new Error("Failed to get meals");

  return new Promise<IMeal[]>((resolve) => {
    setTimeout(() => {
      resolve(db.prepare("SELECT * FROM meals").all() as IMeal[]);
    }, 2000);
  });
}

export function getMeal(slug: string) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as IMeal;
}

export async function saveMeal(meal: IMealForm) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const fileExtension = meal.image.name.split(".").pop();
  const fileName = `uploaded-${meal.slug}-${Date.now()}.${fileExtension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const imageBuffer = await meal.image.arrayBuffer();

  stream.write(Buffer.from(imageBuffer), (error) => {
    if (error) {
      throw new Error("Failed to upload image");
    }
  });

  db.prepare(
    `
    INSERT INTO meals
      (slug, title, image, summary, instructions, creator, creator_email)
    VALUES
      (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)
  `,
  ).run({ ...meal, image: `/images/${fileName}` });
}
