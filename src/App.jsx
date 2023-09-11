import { BrowserRouter } from "react-router-dom"
import { About, Contact,  Experience, Hero, Navbar, Tech, Projects, StarsCanvas } from './components'

const App = () => {


  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero/>
          <Navbar/>
        </div>
           <About/>
           <Experience/>
           <Tech/>
           <Projects/>

        <div >
           <Contact/>
           <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
