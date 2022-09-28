import React from 'react'

export default function TopSearch() {
  return (
    <div className='top-search'>
      <div className='top-btn'>Rent</div>
      <div className='top-btn'>Buy</div>
      <div className='top-input'>
        <div>
          <input placeholder='Location' type="text"  /> 
          <span className='icon1 fa-regular fa-location-dot'></span>
        </div>
        <select name="type" id="top-type">
          <option value="type" selected>Type</option>
          <option value="duplex">Duplex</option>
          <option value="bongallow">Bongalow</option>
        </select>
        <div>
          <input placeholder='Budget' type="text" />
          <span className='icon2'>$</span>
        </div>
        <button id='top-search'>Search</button>
      </div>
    </div>
  )
}
