import { useEndpoint } from "../hooks/useEndpoint";
import { useLoading } from "../stores/useLoading";
import { useState, useEffect, useCallback } from "react";
import useResultStore from "../stores/useResultStore";
import axios from "axios";
import Result from "./Result";

const Searching = () => {
  const [searching, setSearching] = useState("");
  const [searchCall, setSearchCall] = useState("");
  const { updateResults } = useResultStore();
  const { loading, setLoading } = useLoading();

  const { endpoint } = useEndpoint();
  const searchApiCall = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${endpoint}search.php?s=${searching}`);
      // response
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
  }, [searching]);

  useEffect(() => {
    const fetchResults = async () => {
      if (searchCall !== "") {
        const getResults = await searchApiCall();
        updateResults(getResults);
      }
    };
    fetchResults();
  }, [searchCall]);

  return (
    <>
      {loading ? (
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
        <div className="flex flex-col gap-4">
          <div
            className="rounded w-full lg:w-2/4 m-auto p-0 border-1 border-orange-500"
            id="searchbox"
          >
            <input
              id="searchbar"
              type="text"
              placeholder="Search for a meal"
              className="p-3 text-lg focus:outline-none rounded-s-md"
              value={searching}
              onChange={(event) => setSearching(event.target.value)}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  setSearchCall(searching);
                }
              }}
            />
            <button
              onClick={() => setSearchCall(searching)}
              className="text-slate-100 bg-orange-600 px-4 text-lg rounded-e-md"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <hr />
          <Result />
        </div>
      )}
    </>
  );
};

export default Searching;
