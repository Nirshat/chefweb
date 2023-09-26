

const Footer = () => {
  return (
    <div className="bg-blue-900">
      <div className="" id="footerbox">
        <div className="flex flex-col">
          <div className="text-4xl font-bold">
            <span className="text-slate-100">Chef</span>

            <span className="text-orange-400">Web</span>
          </div>
          <span className="text-slate-100">Unlock Culinary Creativity, One Recipe at a Time!</span>
          <span className="text-start text-slate-400 text-sm">Developed by Aron Paul Gonzales.All rights reserved</span>
        </div>

        <div className="flex flex-col text-slate-400">
          <span className="text-lg font-semibold text-slate-300">Contact Us</span>
          <span className="text-sm">Address: Address: 6996 at Philippines, Asia, Earth</span>
          <span className="text-sm">Phone Number: (123) 456-7899</span>
          <span className="text-sm">Email: chefweb@gmail.com</span>
        </div>
      </div>
      
    </div>
  )
}

export default Footer