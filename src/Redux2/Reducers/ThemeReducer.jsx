 
const INITAIAL_VALUE={
    theme:"light"
}

export const  ThemeReducer=(state=INITAIAL_VALUE,action)=>{
 
     switch (action.type) {
        case "CHANGE_THEME":
            return {
                ...state,
                theme:action.payload
            }
            
     
        default: return state
             
     }

}