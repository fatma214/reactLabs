import axios from 'axios'
import React, { useEffect } from 'react'
import Card from '../Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesList } from '../../Redux2/Actions/MoviesAction'

export default function Home() {
      const myLang = useSelector((state) => state.myLang.lang)
      const myCurrentTheme=useSelector((state)=>state.myTheme.theme)
 
      const dispatch =useDispatch()
      const movies=useSelector((state)=>state.myMovies.list)
      console.log(movies);
      
      useEffect(() => {
            getMovies()
      }, [])

      function getMovies() {
            dispatch(getMoviesList(""))
      }


      function searchForMovies(e) {
            if (e.target.value === "") {
                  getMovies()
            } else {
                  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=29cf44b93ca83bf48d9356395476f7ad&query=${e.target.value}`)
                        .then((res) => { movies=res.data.results })
                        .catch((err) => {
                              console.log(err);
                        })
            }
      }

      return <>
            <div className="row" dir={myLang === "AR" ? 'rtl' : 'ltr'}>
                  <h1>{myLang}</h1>
                  <h2>{myCurrentTheme}</h2>
                  <div className='mb-5'>
                        <input onChange={(e) => {
                              searchForMovies(e)
                        }} placeholder='search' className='form-control w-75 mx-auto' type="text" name="" id="" />
                  </div>

                  {movies.map((movie) =>
                        <Card key={movie.id}  movie={movie} title={movie.original_title} navigate={`movieDetails/${movie.id}`} imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                  )}

            </div>

      </>
}
