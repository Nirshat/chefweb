import Carousel from "../components/Carousel";
import "../../public/scss/loader.scss";
import useLoading from "../hooks/useLoading";
import Intro from "../components/Intro";

const Home = () => {
  const { loading} = useLoading();

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
        <div className="flex flex-col gap-8">
          <Intro />
          <Carousel/>
        </div>
      )}
    </>
  );
};

export default Home;
