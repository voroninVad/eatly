import React, { Component } from 'react'
import './foods.css'
import trust from './../../../img/trustpilot.svg'
import food from './../../../img/chickenHell.png'
import graphic from './../../../img/graph.png'


export class Foods extends Component {
  render() {
    return (
      <section className="foods">
        <div className="foods_content">
            <div className="count_user">
                <label>OVER 1000 USERS</label>
            </div>
            <h1 className="title">Enjoy Foods All
            Over The <span>World</span></h1>
            <p className="description">
            EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span>$20 bonus.</span>
            </p>
            <div className="buttons">
                <button className='start'>Get Started</button>
                <button className='go-pro'>Go Pro</button>
            </div>
            <div className="trustpilot">
                <img src={trust} alt="" />
                <div class="rating-result">
                    <span class="active"></span>	
                    <span class="active"></span>    
                    <span class="active"></span>  
                    <span class="active"></span>    
                    <span class="active"></span>
                </div>
                <label>4900+</label>
            </div>
        </div>
        <div className="foods_banner">
            <img src={food} alt="" />
            <div className="graphic">
                <img src={graphic} alt="" />
            </div>
            <div className="dish">
                <img width={73} height={81} src={food} alt="" />
                <div className="cont">
                    <h2>Chicken Hell</h2>
                    <p>On The Way</p>
                    <div className="time">3:09 PM</div> 
                </div>       
            </div>
        </div>

      </section>
    )
  }
}
export default Foods