import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
 
import { changeWishListCount } from '../../Redux/Actions/NumOfWishList';
import { addToWishlist, removeFromWishlist } from '../../Redux/Actions/WishLitstAction';

export default function Card(props) {
    const wishList = useSelector((state) => state.wishList.wishList); 
    const numOfWishList = useSelector((state) => state.wishListCount.numOfWishList);
    const dispatch = useDispatch();
    const isLiked = wishList.some(movie => movie.id === props.movie.id);

    const toggleLike = () => {
        if (isLiked) {
            dispatch(removeFromWishlist(props.movie.id));
            dispatch(changeWishListCount(numOfWishList - 1));

        } else {
            dispatch(addToWishlist(props.movie));
            dispatch(changeWishListCount(numOfWishList + 1));
        }
    };

    return (
        <>
            <div className="col-sm-6 col-md-4 col-lg-2 bg-dark p-3 text-white">
                <Link to={props.navigate}>
                    <img className='w-100' src={props.imgSrc} alt="" />
                </Link>
                <p>{props.title}</p>
                <i className="fa-solid fa-heart fs-3" style={{ color: isLiked ? "red" : "" }} onClick={toggleLike}></i>
            </div>
        </>
    );
}
