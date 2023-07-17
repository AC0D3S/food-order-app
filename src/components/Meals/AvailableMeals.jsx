import React, { useEffect, useState } from "react";

import "./AvailableMeals.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://food-order-app-46cfb-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Uh Oh... Something went wrong...");
      }

      const data = await response.json();

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className="meals-loading">
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className="meals-error">
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <>
      <section className="meals">
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    </>
  );
};

export default AvailableMeals;
