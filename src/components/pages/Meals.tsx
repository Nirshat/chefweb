import {useState, useEffect} from 'react'
// import fetchFiltered from '../../api-services/filter';
import axios from "axios";
import '../../../public/scss/meals.scss'
import useFiltered from '../../stores/useFiltered';
import useCook from '../../stores/useCook';
import usePages from '../../stores/usePages';

type State = {
  strMeal: string
  strMealThumb: string
  idMeal: string
}

const Meals = () => {
  const {category, paliwanag, cover} = useFiltered();
  const {updateId} = useCook();
  const {updatePage} = usePages();
  const [meals, setMeals] = useState<State[]>([]);
  const endpoint = import.meta.env.VITE_THEMEALDB_URL;

  const fetchFiltered = async() => {
    try{
      const {data} = await axios.get(`${endpoint}filter.php?c=${category}`);
      return data.meals
    }
    catch(error){
      console.log("API CALL FAILED");
    }
  }

  useEffect(() => {
    const callMeals = async () => {
      // fetch mo na
      const callMealsInfo = await fetchFiltered();
      setMeals(callMealsInfo);
    }
    callMeals();
  }, [])

  const startCooking = (token:string) => {
    updateId(token);
    updatePage(2);
  }


  return (
    <div className='min-h-screen flex flex-col gap-8'>
      <div className='bg-slate-200' id='meal-intro'>
        <div className=''>
          <span id='category-name' className='font-semibold'>{category}</span>
          <p className=''>
            {paliwanag}
          </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src={cover} alt="" />
        </div>
      </div>

      <div className='gap-4 p-4 box-border' id='meals-box'>
        {meals.map((meal, index) => (
          <div key={index} className='card border-none box-border rounded bg-blue-100 p-2' id='mealbox'>
            <img src={meal.strMealThumb} alt="" className='card-img-top' id='meal-img' />
            <div className="card-body">
              <p className='card-text font-semibold'>{meal.strMeal}</p>
            </div>
            <div className="card-footer">
              <button className='bg-orange-600 text-slate-100 rounded py-1 px-2' onClick={() => startCooking(meal.idMeal) }>Start Cooking</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Meals