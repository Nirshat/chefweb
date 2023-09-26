import '../../../public/scss/cook.scss'
import {useEffect} from 'react'
import axios from "axios";
import useCook from '../../stores/useCook';



const Cook = () => {

  const {id, infos , updateInfos} = useCook();
  const endpoint = import.meta.env.VITE_THEMEALDB_URL;

  const fetchFiltered = async() => {
    try{
      const {data} = await axios.get(`${endpoint}lookup.php?i=${id}`);
      return data.meals[0]
    }
    catch(error){
      console.log("API CALL FAILED");
    }
  }

  useEffect(() => {
    const callMealInfo = async () => {
      // fetch mo na
      const callInfos = await fetchFiltered();
      updateInfos(callInfos);
    }
    callMealInfo();
  }, [])


  const instruct = [
    {
      ingred: infos.strIngredient1,
      measure: infos.strMeasure1
    },
    {
      ingred: infos.strIngredient2,
      measure: infos.strMeasure2
    },
    {
      ingred: infos.strIngredient3,
      measure: infos.strMeasure3
    },
    {
      ingred: infos.strIngredient4,
      measure: infos.strMeasure4
    },
    {
      ingred: infos.strIngredient5,
      measure: infos.strMeasure5
    },
    {
      ingred: infos.strIngredient6,
      measure: infos.strMeasure6
    },
    {
      ingred: infos.strIngredient7,
      measure: infos.strMeasure7
    },
    {
      ingred: infos.strIngredient8,
      measure: infos.strMeasure8
    },
    {
      ingred: infos.strIngredient9,
      measure: infos.strMeasure9
    },
    {
      ingred: infos.strIngredient10,
      measure: infos.strMeasure10
    },
    {
      ingred: infos.strIngredient11,
      measure: infos.strMeasure11
    },
    {
      ingred: infos.strIngredient12,
      measure: infos.strMeasure12
    },
    {
      ingred: infos.strIngredient13,
      measure: infos.strMeasure13
    },
    {
      ingred: infos.strIngredient14,
      measure: infos.strMeasure14
    },
    {
      ingred: infos.strIngredient15,
      measure: infos.strMeasure15
    },
    {
      ingred: infos.strIngredient16,
      measure: infos.strMeasure16
    },
    {
      ingred: infos.strIngredient17,
      measure: infos.strMeasure17
    },
    {
      ingred: infos.strIngredient18,
      measure: infos.strMeasure18
    },
    {
      ingred: infos.strIngredient19,
      measure: infos.strMeasure19
    },
    {
      ingred: infos.strIngredient20,
      measure: infos.strMeasure20
    },
  ];

  // To avoid null values
  const avoidnulls = instruct.filter((i) => i.ingred !== null && i.ingred != "" && i.measure !== null && i.measure != "" );





  return (
    <div className='p-4 min-h-screen'>
      <div className='flex flex-col gap-4'>
        <div className=''>
          {/* <iframe className='' id='youtube' src={infos.strYoutube}> </iframe> */}
          <img className='rounded' id='thumb' src={infos.strMealThumb}/>
        </div>
        <span className='text-4xl font-bold text-blue-700'>{infos.strMeal}</span>
        <div className='flex flex-col gap-10'>
          <ul className='flex flex-col px-4 gap-2'>
            <span className='font-semibold text-orange-500 text-2xl'>Ingredients:</span>
            {avoidnulls.map((i, index) => (
              <li key={index} className='text-lg'>
                ▸ {i.ingred} ({i.measure})
              </li>
            ))}
          </ul>

          <ul className='flex flex-col px-4 gap-2'>
            <span className='font-semibold text-orange-500 text-2xl'>How to Prepare {infos.strMeal}</span>
            {infos.strInstructions.split('. ').map((p, index) => (
              <li key={index} className='text-lg'>{index + 1}. {p}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cook