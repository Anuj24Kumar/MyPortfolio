import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import About from './components/About/About'
import Projects from './components/Projects/Project'
import Skills from './components/Skills/Skill'
import Contact from './components/Contact/Contact'



function App() {
  

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/about" element={<About/>}/>
      <Route path = "/project" element={<Projects/>}/>
      <Route path = "/skills" element={<Skills/>}/>
      <Route path = "/contact" element={<Contact/>}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
