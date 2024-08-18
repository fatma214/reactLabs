 
const INITAIAL_VALUE={
    lang:"EN"
}

export const  LanguageReducer=(state=INITAIAL_VALUE,action)=>{
 
     switch (action.type) {
        case "CHANGE_LANGUAGE":
            return {
                ...state,
                lang:action.payload
            }
            
     
        default: return state
             
     }

}