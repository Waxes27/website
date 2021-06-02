import React, { Component } from "react";
import Header from "./components/header.jsx";
import Links from "./components/links.jsx";
import Portfolio from "./components/portfolio.jsx";
import Interest from "./components/interests.jsx";
import Footer from "./components/footer.jsx";
// import './index.css'

class App extends Component {
  render() {
    return (
      <div id="Wrapper">
        
        {/* <title>Waxes27</title> */}
        <div className="overall">
          <div className="container">
            <Header title="Waxes27" />
            <Links />
            <p className="more">Will be joining more soon socials soon</p>
            <section>Feel free to visit the links above</section>
          </div>

          <div>
            <Interest />
          </div>
        </div>
        <div>
          <div id="Portfolio">
            <Portfolio />
          </div>
          {/* <div className="footer"> */}
            {/* <Footer />  */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}
export default App;
