import React from 'react'

import './Column.scss'

import Card from './../Card/Card'
function Column() {
    return (
        <div className="column">
            <header>Brainstorm</header>
            <ul className="card-list">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                {/* <li className="card-item">Add what you'd like to work on beloww </li>
                <li className="card-item">Add what you'd like to work on beloww </li>
                <li className="card-item">Add what you'd like to work on beloww </li>
                <li className="card-item" >Add what you'd like to work on beloww </li> */}
            </ul>
            <footer>Add another</footer>

        </div>
    )
}

export default Column