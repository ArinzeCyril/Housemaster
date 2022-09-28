import React from 'react'

export default function NavBar() {
  return (
    <nav>
      <h1>Housemaster.</h1>
      <div className='nav-content'>
        <ul className='nav-list'>
          <li><a href="#home">Home</a></li>
          <li><a href="#properties">Properties</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#agent">Agent</a></li>
        </ul>
        <a className='nav-link' href="##"><button>Login/Register</button></a>
      </div>
    </nav>
  )
}
