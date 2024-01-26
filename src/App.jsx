import './Scss/App.scss'

function App() {

  return (
    <>
      <div className="body">
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
        </aside>
        <div className="page">
          <header className='header'>
            <ul className="links">
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Invest</a>
              </li>
              <li>
                <a href="#" className='active'>Auto Invest</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
            </ul>

            <div className="actions">
              <button className="language">
                En
              </button>

              <button className="notifications">
                <img src="./bill.svg" alt="" />
                <span className="count">2</span>
              </button>

              <button className='avatar'>
                <img src="./Avatar.svg" alt="" />
              </button>
            </div>
          </header>
          <div className="content">
            <div className="autoInvestment">
              <h1>Auto Investment</h1>

              <div className="activate">
                <span>Active</span>
                <label class="switch" for="checkbox">
                  <input type="checkbox" id="checkbox" />
                  <div class="slider round"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
