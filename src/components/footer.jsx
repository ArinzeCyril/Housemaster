import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='ft-navs'>
        <div className='ft-expl'>
          <h2>Explore</h2>
          <div>
            <i className='fa-regular fa-greater-than'></i>
            <p>Las Vegas</p>
          </div>
          <div>
            <i className='fa-regular fa-greater-than'></i>
            <p>Lagos</p>
          </div>
          <div>
            <i className='fa-regular fa-greater-than'></i>
            <p>Dubai</p>
          </div>
        </div>
        <div className='ft-cntct'>
          <h2>Contact</h2>
          <div>
            <i className='fa-regular fa-location-dot'></i>
            <p>Old School Lane, Akure</p>
          </div>
          <div>
            <i className='fa-regular fa-phone'></i>
            <p>Call</p>
          </div>
          <div>
            <i className='fa-regular fa-envelope'></i>
            <p>Email</p>
          </div>
        </div>
        <div className='ft-lnk'>
          <h2>Quick Links</h2>
          <div>
            <i className='fa-regular fa-house'></i>
            <p>Properties</p>
          </div>
          <div>
            <i className='fa-regular fa-user-group'></i>
            <p>Agents</p>
          </div>
          <div>
            <i className='fa-regular fa-link'></i>
            <p>About us</p>
          </div>
        </div>
      </div>
      <hr className='hr-1 hr' />
      <hr className='hr-2 hr' />
      <hr className='hr-3 hr' />
      <hr className='hr-4 hr' />
      <hr className='hr-5 hr' />
      <hr className='hr-6 hr' />
      <div  className='dev-ft'>
        <div className='dev'>
          <p>&copy; Designed by Abiodun Dominion</p>
          <p>&copy; Developed by Arinze Cyril</p>
        </div>
        <p>Housemaster.</p>
      </div>
    </footer>
  )
}

export default Footer