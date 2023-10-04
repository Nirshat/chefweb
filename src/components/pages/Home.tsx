import Carousel from "../others/Carousel";
import { useState } from "react";
import Result from "../others/Result";
import axios from "axios";
import useResultStore from "../../stores/useResultStore";
import '../../../public/scss/loader.scss'

const Home = () => {
  const [searching, setSearching] = useState("");
  const { updateResults, loading, setLoading } = useResultStore();
  const contents = [<Carousel />, <Result />];
  const [content, setContent] = useState(0);

  const endpoint = import.meta.env.VITE_THEMEALDB_URL;
  const searchApiCall = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${endpoint}search.php?s=${searching}`);
      if (data.meals !== null) {
        return data.meals;
      } else {
        return [];
      }
    } catch (error) {
      console.log("API CALL FAILED!");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  const fetchResults = async () => {
    if (searching !== "") {
      const getResults = await searchApiCall();
      updateResults(getResults);
      setContent(1);
    }
  };

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
        <div>
          <div
            className="box-border py-24 flex flex-col gap-3 justify-center items-center"
            id="home-bg"
          >
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="rounded w-full p-0" id="searchbox">
                <input
                  id="searchbar"
                  type="text"
                  placeholder="Search for a meal"
                  className="p-3 text-lg focus:outline-none rounded-s-md"
                  value={searching}
                  onChange={(event) => setSearching(event.target.value)}
                />
                <button
                  onClick={fetchResults}
                  className="text-slate-100 bg-blue-900 px-4 text-lg rounded-e-md"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
              <h1 id="tagline" className="text-center font-bold text-slate-100">
                Unlock Culinary Creativity, One Recipe at a Time!
              </h1>
              <h3 className="text-slate-100">PERSONALIZE YOUR EXPERIENCE!</h3>
            </div>
          </div>
          {contents[content]}
        </div>
      )}
    </>
  );
};

export default Home;
