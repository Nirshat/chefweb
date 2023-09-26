import axios from 'axios'


const endpoint = import.meta.env.VITE_THEMEALDB_URL;

const fetchCategories = async() => {
  try{
    const {data} = await axios.get(`${endpoint}` + "categories.php");
    return data.categories;
  }
  catch(error){
    console.log("API Call Failed!");
  }
}

export default fetchCategories;