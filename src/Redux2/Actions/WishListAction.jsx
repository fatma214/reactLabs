


export const AddToWishList=(payload)=>{
    return {
        type:"ADD_TO_WISHLIST",
        payload
    }

}


export const RemoveFromWishList=(payload)=>{
    return {
       type: "REMOVE_FROM_WISHLIST",
       payload
    }
}