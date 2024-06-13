import React, { Component } from 'react'
import './restaurants.css'

import imgChik from './../../../img/ImgChicken.png'
import imgBurg from './../../../img/ImgBurger.png'
import Cards from '../cardRestaurants/Cards';

export default class Restaurants extends Component {
  constructor(props){
    super(props);

    this.state = {
        cards:[
            {
                image: imgChik,
                type: 'Healthy',
                name: 'The Chicken King',
                cookTime: '24min •',
                grade: 4.8,
                favorites: true,
            },
            {
              image: imgBurg,
              type: 'Trending',
              name: 'The Burger King',
              cookTime: '24min',
              grade: 4.9,
              favorites: false,
            },
            {
              image: imgChik,
              type: 'Healthy',
              name: 'The Chicken King',
              cookTime: '24min',
              grade: 4.8,
              favorites: false,
            },
        ]
    }
}
  render() {
    return (
      <section className='restaurants'>
        <div className="container_restaurants">
            <h2 className='restaurants_title'>Our Top <span>Restaurants</span></h2>
              <Cards cards={this.state.cards} />
        </div>
      </section>
    )
  }
}
