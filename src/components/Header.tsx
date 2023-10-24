// import usePages from "../../stores/usePages"

import { Link } from "react-router-dom"


const Header = () => {
  

  return (
    <div className="z-10 w-full flex flex-wrap justify-between items-center top-0 py-8 m-auto">
      <Link to="/">
        <div className="text-3xl font-bold cursor-pointer">
          <span className="text-orange-500">Chef</span>
          <span className="text-slate-800">Web</span>
        </div>
      </Link>

      <div className="flex flex-wrap gap-3 text-slate-800 text-2xl cursor-pointer">
        <span> <i className="fa-brands fa-github"></i></span>
        <span> <i className="fa-brands fa-facebook"></i></span>
      </div>
    </div>
  )
}

export default Header