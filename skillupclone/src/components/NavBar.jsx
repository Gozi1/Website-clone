import React from 'react'

const NavBar = () => {
  return (
    <div className='navBar'>
    <p>icon</p>
      <ul className='navBar-middle'>
        <li>All Categories</li>
        <li> <select autoFocus>
          <option>Our Solutions</option></select></li>
        <li>Pricing</li>
        <li>Special Offers &#128293;</li>
      </ul>
    <ul className='navBar-end'>
      <li>Log in</li>
      <li><button>Free trial</button></li>
      </ul>
</div>
  )
}

export default NavBar

