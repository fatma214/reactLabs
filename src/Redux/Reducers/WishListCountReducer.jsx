const WISH_LIST_COUNT_INITIAL_STATE = {
    numOfWishList: 0,
  };
  
  export default function WishListCountReducer(state = WISH_LIST_COUNT_INITIAL_STATE, action) {
    switch (action.type) {
      case "CHANGE_WishList_Count":
        return {
          ...state,
          numOfWishList: action.payload,
        };
      default:
        return state;
    }
  }
  