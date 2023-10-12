import "../../../public/scss/cook.scss";
import { useEffect } from "react";
import axios from "axios";
import useCook from "../../stores/useCook";
import useEndpoint from "../../stores/useApiEndpoint";
import useLoading from "../../stores/useLoading";
import '../../../public/scss/loader.scss'


const Cook = () => {
  const { id, infos, updateInfos } = useCook();
  const { endpoint } = useEndpoint();
  const { loading, setLoading } = useLoading();

  const fetchFiltered = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${endpoint}lookup.php?i=${id}`);
      return data.meals[0];
    } catch (error) {
      console.log("API CALL FAILED");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    const callMealInfo = async () => {
      // fetch mo na
      const callInfos = await fetchFiltered();
      updateInfos(callInfos);
    };
    callMealInfo();
  }, [id]);

  const instruct = [
    {
      ingred: infos.strIngredient1,
      measure: infos.strMeasure1,
    },
    {
      ingred: infos.strIngredient2,
      measure: infos.strMeasure2,
    },
    {
      ingred: infos.strIngredient3,
      measure: infos.strMeasure3,
    },
    {
      ingred: infos.strIngredient4,
      measure: infos.strMeasure4,
    },
    {
      ingred: infos.strIngredient5,
      measure: infos.strMeasure5,
    },
    {
      ingred: infos.strIngredient6,
      measure: infos.strMeasure6,
    },
    {
      ingred: infos.strIngredient7,
      measure: infos.strMeasure7,
    },
    {
      ingred: infos.strIngredient8,
      measure: infos.strMeasure8,
    },
    {
      ingred: infos.strIngredient9,
      measure: infos.strMeasure9,
    },
    {
      ingred: infos.strIngredient10,
      measure: infos.strMeasure10,
    },
    {
      ingred: infos.strIngredient11,
      measure: infos.strMeasure11,
    },
    {
      ingred: infos.strIngredient12,
      measure: infos.strMeasure12,
    },
    {
      ingred: infos.strIngredient13,
      measure: infos.strMeasure13,
    },
    {
      ingred: infos.strIngredient14,
      measure: infos.strMeasure14,
    },
    {
      ingred: infos.strIngredient15,
      measure: infos.strMeasure15,
    },
    {
      ingred: infos.strIngredient16,
      measure: infos.strMeasure16,
    },
    {
      ingred: infos.strIngredient17,
      measure: infos.strMeasure17,
    },
    {
      ingred: infos.strIngredient18,
      measure: infos.strMeasure18,
    },
    {
      ingred: infos.strIngredient19,
      measure: infos.strMeasure19,
    },
    {
      ingred: infos.strIngredient20,
      measure: infos.strMeasure20,
    },
  ];

  // To avoid null values
  const avoidnulls = instruct.filter(
    (i) =>
      i.ingred !== null &&
      i.ingred != "" &&
      i.measure !== null &&
      i.measure != ""
  );

  return (
    <>
      {loading === true ? (
        <div className="box-border min-h-screen flex flex-col justify-center items-center">
          <section className="dots-container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </section>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col gap-8 padds">
          <div className="firstbox">
            <div className="">
              <img className="rounded" id="thumb" src={infos.strMealThumb} />
            </div>

            <div className="flex flex-col gap-3">
              <div className="font-bold text-3xl text-blue-700 border-b border-blue-900 py-3">
                {infos.strMeal}
              </div>
              <div className="flex flex-col uppercase gap-1">
                <span>
                  <b className="font-semibold">CATEGORY:</b> {infos.strCategory}
                </span>
                <span>
                  <b className="font-semibold">ORIGIN:</b> {infos.strArea}
                </span>
                {infos.strTags !== "" && infos.strTags !== null ? (
                  <div className="flex flex-row gap-2">
                    <span className="font-semibold">
                      {infos.strTags.split(",").length > 1 ? "TAGS:" : "TAG:"}
                    </span>
                    <div className="flex flex-row gap-2">
                      {infos.strTags.split(",").map((tag, index) => (
                        <span
                          className="border-1 border-blue-900 px-1 text-sm"
                          key={index}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-2 bg-blue-900 text-slate-100 p-3">
                <span className="font-semibold text-lg">Ingredients:</span>
                <div className="ingredients">
                  {avoidnulls.map((i, index) => (
                    <span key={index} className="">
                      ▸ {i.ingred} ({i.measure})
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-semibold text-orange-500 text-lg uppercase">
              Instructions:
            </span>
            <ul className="flex flex-col gap-3">
              {infos.strInstructions.split(".").map((p, index) => (
                <li key={index} className="">
                  ▸ {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Cook;
