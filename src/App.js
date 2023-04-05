import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import TopBar from './components/TopBar';
import PregExercise from './components/PregExercise'
import Snacks from './components/Snacks'
import Tracker from './components/Tracker.js'

export default function App(){
  return(
    <>
      <TopBar/>
        <Routes>
          <Route path='/' element ={<HomePage/>}/>
          <Route path='exercises' element ={<PregExercise/>}/>
          <Route path='snacks' element ={<Snacks/>}/>
          <Route path='tracker' element ={<Tracker/>}/>
        </Routes>

    </>
  )
}