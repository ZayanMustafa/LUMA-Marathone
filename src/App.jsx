import { useState } from 'react'
import { BrowserRouter, Route , Routes} from 'react-router'
import Main from './pages/main'
import Services from './pages/service'
import Contact from './pages/contact'
import Projects from './pages/project'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path='/services' element={ <Services />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='projects' element={< Projects/>}/>
            
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
