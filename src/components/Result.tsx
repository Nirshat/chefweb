import useResultStore from "../stores/useResultStore";
import '../../public/scss/loader.scss';
import { Link } from "react-router-dom";
import { useMemo } from "react";

const Result = () => {
  const { results} = useResultStore();

  const resultsMemo = useMemo(() => {
    return results
  }, [results]);

  return (
    <>
      <div className="categories-box min-h-screen">
        <div className="text-xl py-2 my-8 font-bold border-b-4 border-orange-600 w-max">
          RESULTS
        </div>
        {resultsMemo.length > 0 ? (
          <div className="gap-4 box-border" id="meals-box">
            {resultsMemo.map((res, index) => (
              <Link
                to={`/meals/${res.strMeal.toLowerCase()}/${res.idMeal.toLowerCase()}`}
                key={index}
                className="card box-border rounded bg-slate-50  border-1 border-slate-100"
                id="mealbox"
              >
                <img
                  src={res.strMealThumb}
                  alt=""
                  className="card-img-top"
                  id="meal-img"
                />
                <div className="card-body">
                  <p className="card-text font-semibold">{res.strMeal}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="min-h-screen text-lg"> No results found. </div>
        )}
      </div>
    </>
  );
};

export default Result;
