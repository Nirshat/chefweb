
import './App.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import AppRoutes from './Routes'


const App = () => {

  return(
    <>
      <Header/>
        <AppRoutes/>
      <Footer/>
    </>
  )
}

export default App
