import React from 'react'

import './Column.scss'

import Card from './../Card/Card'
import { mapOrder } from '../../utilities/sorts'

function Column(props) {
    const { column } = props
    console.log(column);
    return (
        <div></div>
    )
    const cards = mapOrder(column.cards, column.cardOrder, 'id' )
    // return (
    //     <div className="column">
    //         {/* <header>{column.title}</header> */}
    //         <ul className="card-list">
    //             {/* {cards.map((card, index) => <Card key={index} card={card} />)} */}
    //         </ul>
    //         <footer>Add another</footer>

    //     </div>
    // )
}

export default Column