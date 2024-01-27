import React from 'react'

function Sidebar() {
  return (
    <aside className='sidebar'>
    <div className="logo">
      <img src="./Logo.svg" alt="" />
    </div>
    <div className="content">
      <div className="balanceBox">
        <div className="numbers">
          <img src="./balanceIcon.svg" alt="" />
          <div className="text">
            <h2>
              <span>62,540 </span>
              <span>SAR</span>
            </h2>
            <div className='textIcon'>
              <p>Account Balance</p>
              <img className='chevronLeftIcon' src="./chevronLeftIcon.svg" alt="" />  
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="btn blue">
            Deposit
          </button>
          <button className="btn outline">
            Withdraw
          </button>
        </div>

        <div className="warningText">
          <img src="./warningIcon.svg" alt="Warning" />
          <p>
            To withdraw more than <strong>10,000 SAR</strong> you need to <strong>verify</strong> your banking account.
          </p>
        </div>

        <div className="saudiIllustration">
          <img src="./SaudiManIllustration.svg" alt="" />
          <h3>
            Why Should You Trust It?
          </h3>
          <p>
            Because of this and that. Anyway investing is very good
          </p>
        </div>
      </div>
    </div>
  </aside>  )
}

export default Sidebar