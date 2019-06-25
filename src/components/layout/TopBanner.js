import React from 'react'
import logo from './logo.gif';
import './TopBanner.css'

const TopBanner = () => {
    return (
        <header className="App-header">
          <div className="container">
            <div className="row">
                <div className="col s12 m4">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div className="col s12 m6 offset-m1">
                 <b>Easitronics</b>,
                  <code>your trusted RF & Microwave Expert</code>
                </div>
            </div>
           </div>
        </header>
    )
}

export default TopBanner