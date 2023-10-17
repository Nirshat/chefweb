import { useEffect } from "react";
import useCategories from "../stores/useCategories";
import useFiltered from "../stores/useFiltered";
import axios from 'axios'

import useLoading from "../hooks/useLoading";
import { Link } from "react-router-dom";
import { useEndpoint } from "../hooks/useEndpoint";


const Carousel = () => {
  const { categories, fetch } = useCategories();
  const {updatePaliwanag} = useFiltered();
  const {endpoint} = useEndpoint();
  const {setLoading} = useLoading();

  const fetchCategories = async() => {
    try{
      setLoading(true);
      const {data} = await axios.get(`${endpoint}categories.php`);
      return data.categories;
    }
    catch(error){
      console.log("API Call Failed!");
    }
    finally{
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }

  useEffect(() => {
    const callCategories = async () => {
      // fetch mo na
      const callCategoriesNames = await fetchCategories(); // containing array
      fetch(callCategoriesNames);
    };
    callCategories();
  }, []);

  const filteredMeals = (data1: string) => {
    updatePaliwanag(data1);
  };


  return (
    <>
      <div className="categories-box">
        <div className="text-xl py-2 my-8 font-bold border-b-4 border-blue-800 w-max">CATEGORIES</div>
        <div id="categories">
          {categories.map((item, index) => (
            <Link
              to={`/meals/${item.strCategory.toLowerCase()}`}
              key={index}
              id="category-box"
              className="cursor-pointer box-border flex flex-col bg-slate-100  border-1 border-slate-200 rounded p-2"
              onClick={() =>
                filteredMeals(
                  item.strCategoryDescription,
                )
              }
            >
              <span id="tag" className="bg-blue-900 text-slate-50 rounded">{item.strCategory}</span>
              <img src={item.strCategoryThumb} alt="" className="h-32" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
