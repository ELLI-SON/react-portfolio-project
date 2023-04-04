import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import TopBar from './components/TopBar';
import PregExercise from './components/PregExercise'
import Snacks from './components/Snacks'

export default function App(){
  return(
    <>
      <TopBar/>
        <Routes>
          <Route path='/' element ={<HomePage/>}/>
          <Route path='exercises' element ={<PregExercise/>}/>
          <Route path='food' element ={<Snacks/>}/>
        </Routes>

    </>
  )
}