import React, { Component, useState } from 'react';
import './Scss/App.scss'
import Accordion from './Components/Accordion';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import InvestedStats from './Components/InvestedStats';
import ExpectedRiskStats from './Components/ExpectedRiskStats';





function App() {
  const [active, setActive] = useState(true)
  return (
    <>
      <div className="body">
        <Sidebar/>
        <div className="page">
          <Header/>
          <div className="content">
            <div className="autoInvestment">
              <h1>Auto Investment</h1>

              <div className="activate">
                <span>{active ? 'Active' : 'Not Active'}</span>
                <label class="switch" for="checkbox">
                  <input type="checkbox" onChange={()=>setActive(!active)} checked={active} id="checkbox" />
                  <div class="slider round"></div>
                </label>
              </div>
            </div>

            <div className="card card-1">
              <div className="conservative">
                <h2>
                  Conservative  
                </h2>
                
                <h3>
                  10-14%
                </h3>

                <h4>
                  Interest Rate
                </h4>
              </div>

              <div className="cardContent">
                <div className="top">
                  <div className="item">
                    <h3 className='active'>
                      <span style={{color: !active ? 'red' : ''}}>{active ? 'Active' : 'Not Active'}</span>
                    </h3>
                    <p>Status</p>
                  </div>
                  <div className="item">
                    <h3 className=''>1500 SAR</h3>
                    <p>Max. Investement</p>
                  </div>
                  <div className="item">
                    <h3 className=''>26</h3>
                    <p>Loans Funded</p>
                  </div>
                </div>
                <div className="bottom">
                  <p className="note">
                    * Strategy started at 20th March 2021
                  </p>
                  <div className="buttons">
                    <button className="btn orange">
                      Stop
                    </button>
                    <button className="btn outline">
                      Change Settings
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="stats">
              <InvestedStats/>
              <ExpectedRiskStats/>
            </div>

            <Accordion/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
