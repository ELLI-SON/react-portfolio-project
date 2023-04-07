import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import TopBar from './components/TopBar';
import PregExercise from './components/PregExercise'
import Snacks from './components/Snacks'
import Tracker from './components/Tracker.js'
import { TRIMESTER_EXERCISES } from './test_data'
import { PREG_SNACKS} from './test_data'


export default function App(){
  const[exerciselist, setexerciselist]= useState(TRIMESTER_EXERCISES)
  const[snacklist, setsnacklist]=useState(PREG_SNACKS)

  // updating state by making a new copy of the array
    const moveToTracker=(idMove)=>{
      setexerciselist(exerciselist.map(x => 
        (x.id === idMove) ?
          { ...x, favorite:true } :
          x
      ))
    }

    const removeFromTracker=(idMove)=>{
      setexerciselist(exerciselist.map(x => 
        (x.id === idMove) ?
          { ...x, favorite:false } :
          x
      ))
    }

    const moveSnacktoTracker=(idToMove)=>{
      setsnacklist(snacklist.map(snack => 
        (snack.id === idToMove) ?
          { ...snack, favorite:true } :
          snack
      ))
    }

    const removeSnackFromTracker=(idToMove)=>{
      setsnacklist(snacklist.map(snack => 
        (snack.id === idToMove) ?
          { ...snack, favorite:false } :
          snack
      ))
    }

  return(
    <>
      <TopBar/>
        <Routes>
          <Route path='/' element ={<HomePage/>}/>
          <Route path='exercises' element ={<PregExercise exerciselist={exerciselist} move={moveToTracker}/>}/>
          <Route path='snacks' element ={<Snacks snacklist={snacklist} movesnack={moveSnacktoTracker}/>}/>
          <Route path='tracker' element ={<Tracker exerciselist={exerciselist} snacklist={snacklist} remove={removeFromTracker} removesnack={removeSnackFromTracker}/>}/>
        </Routes>

    </>
  )
}