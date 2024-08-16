const initialState = {
    wishList: [],  // Corrected to match what you use in the component
  };
  
  const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_WISHLIST":
        return {
          ...state,
          wishList: [...state.wishList, action.payload],  // Use wishList here
        };
      case "REMOVE_FROM_WISHLIST":
        return {
          ...state,
          wishList: state.wishList.filter((item) => item.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default wishlistReducer;
  