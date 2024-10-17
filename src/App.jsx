import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import { useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <BrowserRouter>
      <div className={`relative z-0 ${theme === 'light' ? 'bg-gray-800' : 'bg-primary'}`}>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar theme={theme} setTheme={setTheme} />
          <Hero />
        </div>
        <div>
          <About />
          <Experience />
          <Tech />
          <Works />
          {/* <Feedbacks /> */}
        </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
