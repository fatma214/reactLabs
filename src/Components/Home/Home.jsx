import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'

export default function Home() {

      const [movies, setMovies] = useState([])

      useEffect(() => {
            getMovies()
      }, [])

      function getMovies() {
            axios.get("https://api.themoviedb.org/3/movie/popular?api_key=29cf44b93ca83bf48d9356395476f7ad")
                  .then((res) => {
                        setMovies(res.data.results); console.log(res);
                  })
                  .catch((err) => {
                        console.log(err);
                  })
      }


      function searchForMovies(e) {
            if (e.target.value === "") {
                  getMovies()
            } else {
                  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=29cf44b93ca83bf48d9356395476f7ad&query=${e.target.value}`)
                        .then((res) => { setMovies(res.data.results) })
                        .catch((err) => {
                              console.log(err);
                        })
            }
      }

      return <>

            <div className="row">
                  <div className='mb-5'>
                        <input onChange={(e) => {
                              searchForMovies(e)
                        }} placeholder='search' className='form-control w-75 mx-auto' type="text" name="" id="" />
                  </div>

                  {movies.map((movie) =>
                        <Card key={movie.id} movie={movie}   title={movie.original_title} navigate={`movieDetails/${movie.id}`} imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                  )}


            </div>

      </>
}
