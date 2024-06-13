import React, { Component } from 'react'
import './mobile.css'
import mobileApp from './../../../img/Mobile.png'

export default class Mobile extends Component {
  render() {
    return (
      <section className="mobile">
        <div className="mobile__app">
          <div className="mobile_img">
              <img src={mobileApp} alt="" />
            </div>
            <div className="mobiloe_content">
                <h2>Premium <span>Quality</span> <br /> For Your Health</h2>
                <ul className='mobile_list'>
                  <li className='list_item'>Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</li>
                  <li className='list_item'>These foods promote overall wellness by support healthy digestion and boosting immunity</li>
                </ul>
                <button className='download'>Download<span>➜</span></button>
            </div>
        </div>
      </section>
    )
  }
}
