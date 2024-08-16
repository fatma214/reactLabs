import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Register from "./Components/Register/Register.jsx";
import Login from "./Components/login/Login.jsx";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min.js";
import Home from "./Components/Home/Home.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import movieDetails from "./Components/MovieDetails/MovieDetails.jsx";
import WishList from "./Components/WishList/WishList.jsx";
export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <div class="container">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/login" component={Login} exact />
              <Route path="/signup" component={Register} exact />
              <Route path="/wishList" component={WishList} exact />
              <Route path="/movieDetails/:id" component={movieDetails} exact />
              <Route path="*" component={NotFound} exact />
            </Switch>
          </div>
        </BrowserRouter>
      </>
    );
  }
}
