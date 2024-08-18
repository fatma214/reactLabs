import { combineReducers } from "redux";
import { ThemeReducer } from "./ThemeReducer";
import { LanguageReducer } from "./LangReducer";
 
import WishListCountReducer from "./WishListCountReducer";
import WishListReducer from "./WishListReducer";
import MoviesReducer from "./MoviesReducer";
 



export default combineReducers({
   myLang:LanguageReducer,
   myTheme:ThemeReducer,
   myWishList:WishListReducer,
   myWishListcount:WishListCountReducer,
   myMovies:MoviesReducer,
 
})