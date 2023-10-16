// import usePages from "../../stores/usePages"

import { Link } from "react-router-dom"


const Header = () => {
  

  return (
    <div className="bg-blue-900 z-10 flex flex-wrap justify-between items-center top-0" id="headerbox">
      <Link to="/chefweb/">
        <div className="text-3xl font-bold text-slate-100 cursor-pointer">
          <span className="">Chef</span>
          <span className="text-orange-500">Web</span>
        </div>
      </Link>

      <div className="flex flex-wrap gap-3 text-slate-300 text-2xl cursor-pointer">
        <span> <i className="fa-brands fa-github"></i></span>
        <span> <i className="fa-brands fa-facebook"></i></span>
      </div>
    </div>
  )
}

export default Header