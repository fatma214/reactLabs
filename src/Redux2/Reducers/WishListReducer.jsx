

const INITIAL_VALUE = {
    wishList: []
};

export default function WishListReducer(state = INITIAL_VALUE, action) {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            if (state.wishList.find(movie => movie.id === action.payload.id)) {
                return state;
            }
            return {
                ...state,
                wishList: [...state.wishList, action.payload],
            };

        case "REMOVE_FROM_WISHLIST":
            return {
                ...state,
                wishList: state.wishList.filter(movie => movie.id !== action.payload),
            };

        default:
            return state;
    }
}
