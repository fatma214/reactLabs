import { combineReducers } from "redux";
import LanguageReducer from "./LanguageReducer";
import wishlistReducer from "./WishListReducer";
import WishListCountReducer from "./WishListCountReducer";

export default combineReducers({
  myLang: LanguageReducer,
  wishList: wishlistReducer, 
  wishListCount: WishListCountReducer,
});
