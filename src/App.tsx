
import './App.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import {BrowserRouter as Router} from 'react-router-dom'
import AppRoutes from './Routes'


const App = () => {

  return(
    <>
      <Header/>
        <Router>
          <AppRoutes/>
        </Router>
      <Footer/>
    </>
  )
}

export default App
