import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <>
      <div className="py-8">
        <hr className="py-2 border-slate-400" />
        <div className="" id="footerbox">
          <div className="flex flex-col text-slate-500">
            <span className="text-lg font-semibold text-slate-600">Quick links</span>
            <span className="text-sm">Facebook Page: chefweb/facebook.com</span>
            <span className="text-sm">Instagram: chefweb/instagram.cum</span>
            <span className="text-sm">Twitter: chefweb/twitter.com</span>
          </div>

          <div className="flex flex-col text-slate-500">
            <span className="text-lg font-semibold text-slate-600">Contact Us</span>
            <span className="text-sm">Address: Baratie, East Blue</span>
            <span className="text-sm">Phone Number: (123) 456-7899</span>
            <span className="text-sm">Email: chefweb@gmail.com</span>
          </div>

          <div className="flex flex-col">
            <Link to="/" className="font-bold footlogo">
              <span className="text-slate-800">Chef</span>
              <span className="text-orange-500">Web</span>
            </Link>
            <span className="text-slate-500">Unlock Culinary Creativity, One Recipe at a Time!</span>
            <span className="text-start text-slate-500 text-sm">Developed by Aron Paul Gonzales.All rights reserved</span>
          </div>
        </div>
        
      </div>
    </>
    
  )
}

export default Footer