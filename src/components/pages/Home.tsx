import Carousel from "../others/Carousel"

const Home = () => {

  return (
    <>
      <div className="box-border py-24 flex flex-col gap-3 justify-center items-center" id="home-bg">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 id="tagline" className="text-center font-bold text-slate-100">Unlock Culinary Creativity, <br /> One Recipe at a Time!</h1>
          <input id="searchbar" type="text" placeholder="Search for a meal" className="border p-3 rounded-2xl text-lg" />
        </div>
      </div>
      <Carousel/>
    </>
  )
}

export default Home