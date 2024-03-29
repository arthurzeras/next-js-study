import Link from "next/link";
import { Metadata } from "next";
import { Suspense } from "react";

import styles from "./page.module.css";
import { getMeals } from "@/lib/meals";
import MealsGrid from "@/components/meals/meals-grid";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export const metadata: Metadata = {
  title: "NextLevel Food - All meals",
  description: "Browse delicious meals created by our community.",
};

export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favourite Recipe</Link>
        </p>
      </header>

      <main className={styles.main}>
        <Suspense
          fallback={<p className={styles.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
