import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Contact from './pages/contect/Contact'
import Portfolio from './pages/portfolio/Portfolio'
import About from './pages/about/About'
import Themes from './components/Themes'
import Behance from './pages/Behance/Behance'


function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Themes/>
   <Routes>
    <Route index element={<Home />}></Route>
    <Route path='about' element={<About />}/>
    <Route path='portfolio' element={<Portfolio />}/>
    <Route path='contact' element={<Contact />}/>
    <Route path='behance' element={<Behance />}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
