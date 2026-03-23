import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import LoginPage from '../pages/LoginPage'
import NotFound from '../pages/NotFoundPage'

const AppRoutes = () => {
  return (
   <Routes>
   <Route element={<MainLayout/>}>
    <Route path='/' element={<HomePage/>}/>
     <Route path='/about' element={<AboutPage/>}/>
     <Route path='/login' element={<LoginPage/>}/>
    </Route>

      {/* 404 fallback */}
      <Route path="*" element={<NotFound />} />
   </Routes>
  )
}

export default AppRoutes