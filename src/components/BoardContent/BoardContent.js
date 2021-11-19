import React, { useState, useEffect} from 'react'

import './BoardContent.scss'


import {initialData} from './../../actions/initialData'

import Column from './../Column/Column'
import Task from './../Task/Task'
function BoardContent() {
  const [board, setBoard]= useState({})
  const [columns, setColumns ]= useState({})
  useEffect(()=>{
    const boardFromDB = initialData
  }, [])
    return (
        <div className="board-content">
        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <Column/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
          </ul>
          <footer>Add another</footer>

        </div>
        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <Column/>
            <li>Add what you'd like to work on beloww </li>
            <li>Add what you'd like to work on beloww </li>
            <li>Add what you'd like to work on beloww </li>
            <li>Add what you'd like to work on beloww </li>
          </ul>
          <footer>Add another</footer>

        </div>
     
      </div >
    )
}

export default BoardContent;