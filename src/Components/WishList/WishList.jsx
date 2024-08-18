import React from 'react'
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

export default function WishList() {

  const wishList = useSelector((state) => state.myWishList.wishList);
  return <>
      <div className="row">
         {wishList.length===0?<h1>your wish list is empty</h1>:  wishList.map(movie => (
                <Card key={movie.id} movie={movie} title={movie.original_title} navigate={`movieDetails/${movie.id}`} imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            ))}     
      </div>
  
  </>
}
