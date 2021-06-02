import React, { Component } from 'react'
import Header from './components/header.jsx'
import Links from './components/links.jsx'
import Portfolio from './components/portfolio.jsx'
// import './index.css'

class App extends Component{
  render(){
    return <div className="overall">
      <div className='container'>
      <Header title="Waxes27"/>
      <Links/>
      <p className="more">Will be joining more soon socials soon</p>
      <section>Feel free to visit the links above</section>
      </div>

      <div id="Portfolio">
        <Portfolio/>
      </div>
    </div>
  }
}
export default App;
