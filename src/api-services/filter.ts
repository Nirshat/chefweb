import axios from "axios";
import useFiltered from "../stores/useFiltered";


const endpoint = import.meta.env.VITE_THEMEALDB_URL;

const fetchFiltered = async() => {
  try{
    const {category} = useFiltered();
    // const test = "Chicken"
    const {data} = await axios.get(`${endpoint}filter.php?c=${category}`);
    return data.meals
  }
  catch(error){
    const {category} = useFiltered();
    console.log(category);
  }
}

export default fetchFiltered