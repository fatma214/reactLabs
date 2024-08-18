const initialState = {
    list: [],
};

export default function ArabicMoviesReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ARABIC_MOVIES":
            return {
                ...state,
                list: action.payload,
            };
        default:
            return state;
    }
}
