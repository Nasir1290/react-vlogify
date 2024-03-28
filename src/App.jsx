import React from 'react'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/register' element={<RegistrationPage/>}/>
      
    </Routes>
  )
   
  
}

export default App
