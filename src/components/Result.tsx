import useCook from "../stores/useCook";
import useResultStore from "../stores/useResultStore";
import '../../public/scss/loader.scss';
import { Link } from "react-router-dom";

const Result = () => {
  const { updateId } = useCook();
  const { results} = useResultStore();

  const startCooking = (token: string) => {
    updateId(token);
  };

  console.log(results);

  return (
    <>
      <div className="categories-box">
        <div className="text-xl py-2 my-8 font-bold border-b-4 border-blue-800 w-max">
          RESULTS
        </div>
        {results.length > 0 ? (
          <div className="gap-4 p-4 box-border" id="meals-box">
            {results.map((res, index) => (
              <Link
                to="/chefweb/cook"
                key={index}
                className="card box-border rounded bg-slate-50  border-1 border-slate-100"
                id="mealbox"
                onClick={() => startCooking(res.idMeal)}
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
          <div className="min-h-screen"> No results found. </div>
        )}
      </div>
    </>
  );
};

export default Result;