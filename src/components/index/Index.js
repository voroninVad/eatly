import { Component } from "react";
import Foods from "./foods/Foods";
import Features from "./features/Features";


class Index extends Component{
  render(){
    return (
      <main>
        <Foods/>
        <Features />
      </main>
    );
  }
}

export default Index;
