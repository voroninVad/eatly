import React, { Component } from 'react'
import './dishes.css'

import img1 from './../../../img/chickenHell.png'
import img2 from './../../../img/sweDishSupreme.png'
import img3 from './../../../img/sweDishTrending.png'
import Cards from '../cardDishes/cards'

export default class Dishes extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards: [
                {
                    like: false,
                    img: img1,
                    type: 'Healthy',
                    name: 'Chicken Hell',
                    cookTime: '24min',
                    grade: 4.8,
                    price: 12
                },
                {
                    like: false,
                    img: img2,
                    type: 'Trending',
                    name: 'Swe Dish',
                    cookTime: '34min',
                    grade: 4.9,
                    price: 19
                },
                {
                    like: false,
                    img: img3,
                    type: 'Supreme',
                    name: 'Swe Dish',
                    cookTime: '34min',
                    grade: 4.9,
                    price: 19
                },{
                    like: false,
                    img: img1,
                    type: 'Healthy',
                    name: 'Chicken Hell',
                    cookTime: '24min',
                    grade: 4.8,
                    price: 12
                },
                {
                    like: false,
                    img: img2,
                    type: 'Trending',
                    name: 'Swe Dish',
                    cookTime: '34min',
                    grade: 4.9,
                    price: 19
                }
            ]
        }
    }
  render() {
    return (
        <section className='dishes'>
        <div className="container_dishes">
            <h2 className='dishes_title'>Our Top <span>Dishes</span></h2>
            <Cards cards={this.state.cards} /> 
            {/* <div className="dishea_but">
                <a href="#">View All </a>
                <svg viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 9.90186H17.8041" stroke-width="2.25773" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M9.90234 2L17.8044 9.90206L9.90234 17.8041" stroke-width="2.25773" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </div> */}
        </div>
      </section>
    )
  }
}
