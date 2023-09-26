import usePages from "../../stores/usePages"


const Header = () => {
  
  const {updatePage} = usePages();

  return (
    <div className="bg-blue-900 z-10 flex flex-wrap justify-between items-center top-0" id="headerbox" onClick={() => updatePage(0)}>
      <div className="text-3xl font-bold text-slate-100 cursor-pointer">
        <span className="">Chef</span>
        <span className="text-orange-500">Web</span>
      </div>

      <div className="flex flex-wrap gap-3 text-slate-300">
        <span>GitHub</span>
        <span>Facebook</span>
      </div>
    </div>
  )
}

export default Header