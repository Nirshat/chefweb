import { useEffect, useMemo } from "react";
import useCategories from "../stores/useCategories";
import useFiltered from "../stores/useFiltered";
import axios from 'axios'

import { Link } from "react-router-dom";
import { useEndpoint } from "../hooks/useEndpoint";


const Carousel = () => {
  const { categories, fetch } = useCategories();
  const {updatePaliwanag} = useFiltered();
  const {endpoint} = useEndpoint();

  const fetchCategories = async() => {
    try{
      const {data} = await axios.get(`${endpoint}categories.php`);
      return data.categories;
    }
    catch(error){
      console.log("API Call Failed!");
    }
  }

  useEffect(() => {
    const callCategories = async () => {
      const callCategoriesNames = await fetchCategories(); // containing array
      fetch(callCategoriesNames);
    };
    callCategories();
  }, [endpoint]);

  const filteredMeals = (data1: string) => {
    updatePaliwanag(data1);
    // setLoading(true);
  };

  const categoriesMemo = useMemo(() => {
    return categories
  }, [categories])


  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="text-xl font-bold border-b-4 border-orange-500 w-max">CATEGORIES</div>
        <div id="categories">
          {categoriesMemo.map((item, index) => (
            <Link
              to={`/meals/${item.strCategory.toLowerCase()}`}
              key={index}
              id="category-box"
              className="cursor-pointer box-border flex flex-col bg-slate-100 border-1 border-slate-200 rounded p-2"
              onClick={() =>
                filteredMeals(
                  item.strCategoryDescription,
                )
              }
            >
              <span id="tag" className="bg-orange-600 text-slate-50 rounded">{item.strCategory}</span>
              <img src={item.strCategoryThumb} alt="" className="h-32" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
