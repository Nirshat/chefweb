import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";
import Result from "../components/Result";
import axios from "axios";
import useResultStore from "../stores/useResultStore";
import '../../public/scss/loader.scss'
import useLoading from "../hooks/useLoading";
import { useEndpoint } from "../hooks/useEndpoint";


const Home = () => {
  const [searching, setSearching] = useState("");
  const [searchCall, setSearchCall] = useState("");
  const { updateResults } = useResultStore();
  const {loading, setLoading} = useLoading();
  const contents = [<Carousel />, <Result />];
  const [content, setContent] = useState(0);

  const {endpoint} = useEndpoint();
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
      }, 1000);
    }
  };


  useEffect(() => {
    const fetchResults = async () => {
      if (searchCall !== "") {
        const getResults = await searchApiCall();
        updateResults(getResults);
        setContent(1);
      }
    };
    fetchResults();
  }, [searchCall]);

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
                  onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                      setSearchCall(searching);
                    }
                  }}
                />
                <button
                  onClick={() => setSearchCall(searching)}
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
