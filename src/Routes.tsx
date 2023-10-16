import {Route, Routes} from 'react-router-dom'

import Home from './pages/Home'
import Meals from './pages/Meals'
import Cook from './pages/Cook'

const AppRoutes = () => {
  
  return (
    <Routes>
      <Route path='/chefweb' element={<Home/>} />
      <Route path='/chefweb/meals/:key' element={<Meals/>} />
      <Route path='/chefweb/meal/:meal' element={<Cook/>} />
    </Routes>
  ) 
}

  // :key 
  // ang gamit nito ay para mag store ng mga ilalagay mong routes after /meals/
  // e.g. /meals/1  or /meals/2 or /meals/asdasd

export default AppRoutes