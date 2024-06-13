import { Component } from "react";
import Foods from "./foods/Foods";
import Features from "./features/Features";
import Mobile from "./mobile/Mobile";
import Restaurants from "./restaurants/Restaurants";
import Dishes from "./dishes/Dishes";


class Index extends Component{
  render(){
    return (
      <main className="main">
        <Foods/>
        <Features />
        <Mobile />
        <Restaurants />
        <Dishes />
        <br/>
      </main>
    );
  }
}

export default Index;
