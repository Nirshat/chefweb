
import './App.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import AppRoutes from './Routes'
import { useLoading } from './stores/useLoading'


const App = () => {

  const {loading} = useLoading();

  return(
    <>
      <div className='main-box flex flex-col gap-8'>
        {loading ? null : (<Header/>) }
        <AppRoutes/>
        {loading ? null : (<Footer/>)}
      </div>
    </>
  )
}

export default App
