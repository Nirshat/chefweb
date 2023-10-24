import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <div
        className="rounded items-center lg:grid lg:gap-32 py-4"
        style={{ gridTemplateColumns: "1fr auto" }}
      >
        <div className="flex flex-col gap-3 items-start">
          <p className="text-4xl md:text-5xl font-bold">
            Start on a Flavorful Journey of Culinary Exploration and Expertise.
          </p>
          <p>
            Our Comprehensive Resource Guides You from Pantry to Plate, Making
            Every Meal a Culinary Masterpiece.
          </p>
          <Link
            to="/search"
            className="rounded py-2.5 px-4 bg-orange-500 text-slate-100 text-base"
          >
            Get Started
          </Link>
        </div>

        <img
          className="hidden lg:block rounded h-96 rotate-3"
          src="https://assets-bice-eta.vercel.app/sanji.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Intro;
