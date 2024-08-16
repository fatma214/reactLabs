const LANGUAGE_INITIAL_STATE = {
    lang: "EN",
  };
  
  export default function LanguageReducer(state = LANGUAGE_INITIAL_STATE, action) {
    switch (action.type) {
      case "CHANGE_LANGUAGE":
        return {
          ...state,
          lang: action.payload,
        };
      default:
        return state;
    }
  }
  