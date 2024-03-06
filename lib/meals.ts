import { IMeal } from "@/types";
import Database from "better-sqlite3";

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
