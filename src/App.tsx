
import './App.scss'
import Footer from './components/others/Footer'
import Header from './components/others/Header'
import Cook from './components/pages/Cook'
import Home from './components/pages/Home'
import Meals from './components/pages/Meals'
import usePages from './stores/usePages'



const App = () => {

  const {no} = usePages();
  const pages = [<Home/>, <Meals/>, <Cook/>]

  return(
    <>
      <Header/>
      {pages[no]}
      <Footer/>
    </>
  )
}

export default App
