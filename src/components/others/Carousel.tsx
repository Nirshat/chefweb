import { useEffect } from "react";
import fetchCategories from "../../api-services/categories";
import useCategories from "../../stores/useCategories";
import useFiltered from "../../stores/useFiltered"
import usePages from "../../stores/usePages";


const Carousel = () => {
  const { categories, fetch } = useCategories();
  const {updateCategory, updatePaliwanag, updateCover} = useFiltered();
  const {updatePage} = usePages();


  useEffect(() => {
    const callCategories = async () => {
      // fetch mo na
      const callCategoriesNames = await fetchCategories(); // containing array
      fetch(callCategoriesNames);
    };
    callCategories();
  }, []);
  // categories.map(m => console.log(m.strCategory));




  const filteredMeals = (data1:string, data2:string, data3:string) => {
    updateCategory(data1);
    updatePaliwanag(data2);
    updateCover(data3);
    updatePage(1);
  }

  return (
    <>
      <div className="p-6 cursor-grab" id="categories">
        {categories.map((item, index) => (
          <div 
            key={index}
            id="category-box"
            className="bg-blue-950 text-slate-100 cursor-pointer w-full max-w-max max-h-max hover:scale-110 box-border rounded flex flex-col justify-center items-center"
            onClick={() => filteredMeals(item.strCategory, item.strCategoryDescription, item.strCategoryThumb)}
          >
            <img
              src={item.strCategoryThumb}
              alt=""
              className="h-20"
            />
            <span className="text-lg font-semibold">{item.strCategory}</span>
            {/* <p className="m-1" id="desc">{item.strCategoryDescription}</p> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousel;
