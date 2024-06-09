import React, { Component } from 'react'
import logo from './../../img/logo.svg'

import './header.css'

export class Header extends Component {
    render() {
      return (
        <header>
            <div className="header">
                <div className="contin_logo">
                    <a href="/eatly">
                    <img src={logo} alt="" />
                    <span>eatly</span>
                    </a>
                </div>
                <nav className='header_menu'>
                    <ul>
                        <li><a href="#">Menu</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="/contacts">Contacts</a></li>
                    </ul>
                </nav>
                <div className="header_form">
                    <button className='login'>Login</button>
                    <button className='sign'>Sign up</button>
                </div>
            </div>
        </header>
      )
    }
  }
  
  export default Header