import { Component } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route,  Link } from "react-router-dom";
import Index from "./components/index/Index";
import Contacts from "./components/blog/Contacts";


class App extends Component{
  render(){
    return (
      <div className="App">
        <Header />
        <Router>
          <Routes>
          <Route exact path="/eatly" Component={Index} />
          <Route exact path="/contacts" Component={Contacts} /> 
          </Routes>
        </Router>
        
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
