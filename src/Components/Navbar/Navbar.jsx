import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
 

export default function Navbar() {
  
  const numOfWishlistItems = useSelector((state)=>state.wishListCount.numOfWishList)


  return  <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/wishList">
            <i class="fa-regular fa-heart fs-3"></i>
            {numOfWishlistItems}
          </Link>
        </li>
  
      </ul>
      
    </div>
  </div>
</nav>
  
  </>
}
