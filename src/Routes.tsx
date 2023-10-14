import {Route, Routes} from 'react-router-dom'


import Home from './pages/Home'
import Meals from './pages/Meals'
import Cook from './pages/Cook'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/chefweb' element={<Home/>} />
      <Route path='/chefweb/meals' element={<Meals/>} />
      <Route path='/chefweb/cook' element={<Cook/>} />
    </Routes>
  )
}

export default AppRoutes