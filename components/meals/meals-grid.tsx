import { IMeal } from "@/types";
import MealItem from "./meal-item";
import styles from "./meals-grid.module.css";

interface Props {
  meals: IMeal[];
}

export default ({ meals }: Props) => {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};
