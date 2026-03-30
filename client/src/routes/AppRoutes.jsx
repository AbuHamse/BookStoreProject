import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Layouts
import MainLayout from '../layouts/MainLayout'
import UserLayout from '../layouts/UserLayout'

// Public Pages
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import LoginPage from '../pages/LoginPage'
import RegistrationPage from '../pages/RegistrationPage'
import ContactPage from '../pages/ContactPage'
import FictionGenrePage from '../pages/FictionGenrePage'
import NonFictionGenrePage from '../pages/NonFictionGenrePage'
import NotFound from '../pages/NotFoundPage'

// User Pages (Make sure to create these files in your pages folder!)
import BooksPage from '../pages/BooksPage'
import AuthorsPage from '../pages/AuthorsPage'


const AppRoutes = () => {
  return (
    <Routes>
      
      {/* 1. Public Routes - Uses MainHeaderComponent */}
      <Route element={<MainLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/genre/fiction' element={<FictionGenrePage />} />
        <Route path='/genre/non-fiction' element={<NonFictionGenrePage />} />
        <Route path='/register' element={<RegistrationPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Route>

      {/* 2. Authenticated User Routes - Uses UserHeaderComponent */}
      <Route element={<UserLayout />}>
        <Route path='/books' element={<BooksPage />} />
        <Route path='/authors' element={<AuthorsPage />} />
       
      </Route>

      {/* 404 Fallback */}
      <Route path="*" element={<NotFound />} />
      
    </Routes>
  )
}

export default AppRoutes