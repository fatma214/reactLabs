import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddToWishList, RemoveFromWishList } from '../../Redux2/Actions/WishListAction';
import { changeWishListCount } from '../../Redux2/Actions/WishLlistCountAction';
 
 

export default function Card(props) {
    const wishList = useSelector((state) => state.myWishList.wishList); 
    const numOfWishList = useSelector((state) => state.myWishListcount.numOfWishList);
    const dispatch = useDispatch();
    const isLiked = wishList.some(movie => movie.id === props.movie.id);

    const toggleLike = () => {
        if (isLiked) {
            dispatch(RemoveFromWishList(props.movie.id));
            dispatch(changeWishListCount(numOfWishList - 1));

        } else {
            dispatch(AddToWishList(props.movie));
            dispatch(changeWishListCount(numOfWishList + 1));
        }
    };

    return (
        <>
            <div className="col-sm-6 col-md-4 col-lg-2 bg-dark p-3 text-white">
                <Link to={props.navigate}>
                    <img className='w-100' src={props.imgSrc} alt="" />
                </Link>
                <h2 className='text-danger bg-info'>{props.original_name}</h2>
                <p>{props.movie.overview}</p>
                <i className="fa-solid fa-heart fs-3" style={{ color: isLiked ? "red" : "" }} onClick={toggleLike}></i>
            </div>
        </>
    );
}
