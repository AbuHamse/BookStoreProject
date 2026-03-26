import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import LoginPage from '../pages/LoginPage'
import NotFound from '../pages/NotFoundPage'
import ContactPage from '../pages/ContactPage'

import FictionGenrePage from '../pages/FictionGenrePage'
import NonFictionGenrePage from '../pages/NonFictionGenrePage'
import RegistrationPage from '../pages/RegistrationPage'

const AppRoutes = () => {
  return (
   <Routes>
   <Route element={<MainLayout/>}>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>

      
      <Route path='/genre/fiction' element={<FictionGenrePage/>}/>
      <Route path='/genre/non-fiction' element={<NonFictionGenrePage/>}/>

        <Route path='/contact' element={<ContactPage/>}/>
         <Route path='/register' element={<RegistrationPage/>}/>
     
     <Route path='/login' element={<LoginPage/>}/>


    </Route>

      {/* 404 fallback */}
    
      <Route path="*" element={<NotFound />} />
   </Routes>
  )
}

export default AppRoutes