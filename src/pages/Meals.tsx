import { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import "../../public/scss/meals.scss";
import useFiltered from "../stores/useFiltered";
import "../../public/scss/loader.scss";
import { Link, useParams } from "react-router-dom";
import { useEndpoint } from "../hooks/useEndpoint";
import { useLoading } from "../stores/useLoading";

type State = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

const Meals = () => {
  const { paliwanag } = useFiltered();
  const [meals, setMeals] = useState<State[]>([]);
  const { endpoint } = useEndpoint();
  const { loading, setLoading } = useLoading();
  const { key } = useParams(); // key is a variable na naka refer sa item na nasa loob ng object (useParams) which is sya yung last parameter sa url

  const fetchFiltered = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${endpoint}filter.php?c=${key}`);
      return response.data.meals;
    } catch (error) {
      console.log("API CALL FAILED");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [key]);

  useEffect(() => {
    const callMeals = async () => {
      const callMealsInfo = await fetchFiltered();
      setMeals(callMealsInfo);
    };
    callMeals();
  }, [key]);

  const dishesMemo = useMemo(() => {
    return meals;
  }, [meals]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [key]);

  return (
    <>
      {loading ? (
        <div className="box-border min-h-screen flex flex-col justify-center items-center">
          <section className="dots-container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </section>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col gap-8">
          <div className="border-2 border-slate-800" id="meal-intro">
            <div className="">
              <span id="category-name" className="font-semibold text-slate-600">
                {key}
                {/* category name */}
              </span>
              <p className="desc">{paliwanag}</p>
            </div>
          </div>

          <div className="box-border" id="meals-box">
            {dishesMemo.map((meal, index) => (
              <Link
                to={`/meals/${key}/${meal.idMeal.toLowerCase()}`}
                key={index}
                className="card box-border rounded bg-slate-50  border-1 border-slate-100"
                id="mealbox"
              >
                <img
                  src={meal.strMealThumb}
                  alt=""
                  className="card-img-top"
                  id="meal-img"
                />
                <div className="card-body">
                  <p className="card-text font-semibold">{meal.strMeal}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Meals;
