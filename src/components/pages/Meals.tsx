import { useState, useEffect } from "react";
// import fetchFiltered from '../../api-services/filter';
import axios from "axios";
import "../../../public/scss/meals.scss";
import useFiltered from "../../stores/useFiltered";
import useCook from "../../stores/useCook";
import usePages from "../../stores/usePages";
import useEndpoint from "../../stores/useApiEndpoint";
import useLoading from "../../stores/useLoading";
import '../../../public/scss/loader.scss'

type State = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

const Meals = () => {
  const { category, paliwanag } = useFiltered();
  const { updateId } = useCook();
  const { updatePage } = usePages();
  const [meals, setMeals] = useState<State[]>([]);
  const { endpoint } = useEndpoint();
  const { loading, setLoading } = useLoading();

  const fetchFiltered = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${endpoint}filter.php?c=${category}`);
      return data.meals;
    } catch (error) {
      console.log("API CALL FAILED");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  useEffect(() => {
    const callMeals = async () => {
      // fetch mo na
      const callMealsInfo = await fetchFiltered();
      setMeals(callMealsInfo);
    };
    callMeals();
  }, [category]);

  const startCooking = (token: string) => {
    updateId(token);
    updatePage(2);
  };

  return (
    <>
      {loading === true ? (
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
          <div className="m-4 border-2 border-blue-800" id="meal-intro">
            <div className="">
              <span id="category-name" className="font-semibold text-blue-900">
                {category}
              </span>
              <p className="desc">{paliwanag}</p>
            </div>
          </div>

          <div className="gap-4 p-4 box-border" id="meals-box">
            {meals.map((meal, index) => (
              <div
                key={index}
                className="card box-border rounded bg-slate-50  border-1 border-slate-100"
                id="mealbox"
                onClick={() => startCooking(meal.idMeal)}
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
                {/* <div className="card-footer">
                <button
                  className="bg-orange-600 text-slate-100 rounded py-1 px-2"
                  onClick={() => startCooking(meal.idMeal)}
                >
                  Start Cooking
                </button>
              </div> */}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Meals;
