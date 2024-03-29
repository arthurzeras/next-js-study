import Link from "next/link";
import Image from "next/image";

import { IMeal } from "@/types";
import styles from "./meal-item.module.css";

export interface Props extends IMeal {}

export default function MealsGridItem({
  title,
  slug,
  image,
  summary,
  creator,
}: Props) {
  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="(max-width: 426px) 100vw"
          />
        </div>
        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>

      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
