import { useEffect } from "react";
import useCategories from "../../stores/useCategories";
import useFiltered from "../../stores/useFiltered";
import usePages from "../../stores/usePages";
import axios from 'axios'
import useEndpoint from "../../stores/useApiEndpoint";
import useLoading from "../../stores/useLoading";


const Carousel = () => {
  const { categories, fetch } = useCategories();
  const { updateCategory, updatePaliwanag, updateCover } = useFiltered();
  const { updatePage } = usePages();
  const {endpoint} = useEndpoint();
  const {setLoading} = useLoading();

  const fetchCategories = async() => {
    try{
      setLoading(true);
      const {data} = await axios.get(`${endpoint}` + "categories.php");
      return data.categories;
    }
    catch(error){
      console.log("API Call Failed!");
    }
    finally{
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }

  useEffect(() => {
    const callCategories = async () => {
      // fetch mo na
      const callCategoriesNames = await fetchCategories(); // containing array
      fetch(callCategoriesNames);
    };
    callCategories();
  }, [categories]);

  const filteredMeals = (data1: string, data2: string, data3: string) => {
    updateCategory(data1);
    updatePaliwanag(data2);
    updateCover(data3);
    updatePage(1);
  };


  // const [actives, setActives] = useState<String[]>([]);
  // const open = (key:string) => {
  //   if(!actives.includes(key)){
  //     setActives(() => [...actives, key]);
  //   }
  //   else{
  //     const filt = actives.filter(items => items != key);
  //     setActives((prevActives) => prevActives = filt);
  //   }
  // }

  return (
    <>
      <div className="categories-box">
        <div className="text-xl py-2 my-8 font-bold border-b-4 border-blue-800 w-max">CATEGORIES</div>
        <div id="categories">
          {categories.map((item, index) => (
            <div
              key={index}
              id="category-box"
              className="cursor-pointer box-border flex flex-col bg-slate-100  border-1 border-slate-200 rounded p-2"
              onClick={() =>
                filteredMeals(
                  item.strCategory,
                  item.strCategoryDescription,
                  item.strCategoryThumb
                )
              }
            >
              <span id="tag" className="bg-blue-900 text-slate-50 rounded">{item.strCategory}</span>
              <img src={item.strCategoryThumb} alt="" className="h-32" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
