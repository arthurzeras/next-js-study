import { IMeal } from "@/types";
import Database from "better-sqlite3";

const db = Database("meals.db");

export function getMeals() {
  return new Promise<IMeal[]>((resolve) => {
    setTimeout(() => {
      resolve(db.prepare("SELECT * FROM meals").all() as IMeal[]);
    }, 2000);
  });
}
