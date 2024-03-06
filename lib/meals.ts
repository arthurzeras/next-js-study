import { IMeal } from "@/types";
import Database from "better-sqlite3";

const db = Database("meals.db");

export function getMeals() {
  return db.prepare("SELECT * FROM meals").all() as IMeal[];
}
