import React from 'react';
import {Routes , Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home';
import Login from '../pages/Login';
import  Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import  Tour from '../pages/Tour';
import  TourDetails from '../pages/TourDetails';
import ThankYou from '../pages/ThankYou'; 

const router = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to ='/home'/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/tour' element={<Tour/>}/>
      <Route path='/tours/:id' element={<TourDetails/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/thank-you' element={<ThankYou/>}/>
      <Route path='/tour/search' element={<SearchResultList/>}/> 

    </Routes>
  )
}

export default router

