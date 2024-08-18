
const INITIAL_VALUE = {
    numOfWishList: 0,
};

export default function WishListCountReducer(state = INITIAL_VALUE, action) {
    switch (action.type) {
        case "CHANGE_WISHLIST_COUNT":
            return {
                ...state,
                numOfWishList: action.payload,
            };
        default:
            return state;
    }
}