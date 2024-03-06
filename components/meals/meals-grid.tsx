import styles from "./meals-grid.module.css";
import MealItem, { Props as MealItemProps } from "./meal-item";

interface MealsItems extends MealItemProps {
  id: number;
}

interface Props {
  meals: MealsItems[];
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
