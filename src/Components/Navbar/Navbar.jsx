import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeLanguage } from '../../Redux2/Actions/LangAction';
import { getMoviesList } from '../../Redux2/Actions/MoviesAction';
// import { changeTheme } from '../../Redux2/Actions/ThemeAction';

export default function Navbar() {
  const numOfWishlistItems = useSelector((state) => state.myWishListcount.numOfWishList);
  const myLang = useSelector((state) => state.myLang.lang);
  // const myTheme = useSelector((state) => state.myTheme.theme);
  const dispatch = useDispatch();
 
  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    dispatch(changeLanguage(selectedLang)); 
    dispatch(getMoviesList(selectedLang));  
  };

  // const changeMyTheme = () => {
  //   dispatch(changeTheme(myTheme === "light" ? "dark" : "light"));
  // };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Logo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Register</Link>
            </li>
            <li className="nav-item">
              <select className="form-select" value={myLang} onChange={handleLanguageChange}>
                <option value="EN">English</option>
                <option value="AR">Arabic</option>
              </select>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wishList">
                <i className="fa-regular fa-heart fs-3"></i>
                {numOfWishlistItems}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
