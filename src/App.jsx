import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Services from './components/Services'
import Social from './components/Social'
import Testimonial from './components/Testimonial'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Dummy from './components/Dummy'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Social /> */}
      <Dummy />
      <Contact />
      <Footer />
    </>
  )
}

export default App
