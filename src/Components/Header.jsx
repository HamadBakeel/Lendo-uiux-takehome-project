import React from 'react'

function Header() {
  return (
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
    )
}

export default Header