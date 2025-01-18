import React from 'react'
import LandingPage from './pages/landing page/LandingPage'
import ContactUs from './pages/landing page/ContactUs'
import {BrowserRouter,Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <>
    <BrowserRouter>
          <Routes>
          <Route path="" element={<LandingPage />}/>
          <Route path="/contactus" element={<ContactUs />} />
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App