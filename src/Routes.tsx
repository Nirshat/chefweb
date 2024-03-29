import {Route, Routes} from 'react-router-dom'

import Home from './pages/Home'
import Meals from './pages/Meals'
import Cook from './pages/Cook'
import PageNotFound from './pages/PageNotFound'
import Searching from './components/Searching'

const AppRoutes = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/search' element={<Searching/>} />
      <Route path='/meals/:key'>
        <Route index element={<Meals/>} /> {/* default */}
        <Route path=':meal' element={<Cook/>} />
      </Route>
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
  ) 
}

  // :key or meal
  // ang gamit nito ay para mag store ng mga ilalagay mong routes after /meals/
  // e.g. /meals/1  or /meals/2 or /meals/asdasd

export default AppRoutes