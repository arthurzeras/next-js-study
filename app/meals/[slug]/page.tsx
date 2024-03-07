import Image from "next/image";
import { notFound } from "next/navigation";

import { getMeal } from "@/lib/meals";
import styles from "./page.module.css";

interface PageParams extends Readonly<{ params: { slug: string } }> {}

export async function generateMetadata({ params }: PageParams) {
  const meal = getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  return {
    title: `NextLevel Food - ${meal.title}`,
    description: meal.summary,
  };
}

export default function MealsSlugPage({ params }: PageParams) {
  const meal = getMeal(params.slug);
  const instructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>

        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>

      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: instructions }}
        />
      </main>
    </>
  );
}
