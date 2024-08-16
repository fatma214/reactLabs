import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


export default function MovieDetails() {

    const [movieDetail, SetMovieDetail] = useState({})
    const params = useParams();
    console.log(params);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=29cf44b93ca83bf48d9356395476f7ad`)
            .then((res) => { SetMovieDetail(res.data) })
            .catch((err) => {
                console.log(err);
            })
    }, [params.id])


    return <>

        <div className="row justify-content-center">
         
                <div className="col-md-3">
                    <img className='w-100' src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} alt="" />
                </div>
                <div className="col-md-8  p-5">
                    <h2>{movieDetail.title}</h2>
                    <p>{movieDetail.overview}</p>
                </div>
           

        </div>
    </>
}
