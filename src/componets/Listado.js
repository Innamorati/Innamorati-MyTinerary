import { data, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MainDiv } from '../style/Listado'
import MoviesCards from './MoviesCards'

function Listado() {

    const [movieList, setMovieList] = useState([])

    let token = localStorage.getItem('token')
    // console.log(token)

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=425da3f6b8d817aa92d624169aaf39f1').then(res => { const apiData = res.data.results; setMovieList(apiData) });

    }, [setMovieList]);
    console.log(movieList)
    return (

        <MainDiv>
            {!token && <Navigate to='/' />}
            {movieList?.map((movie) =>

                <MoviesCards movie={movie} />
            )}
        </MainDiv>
    )
}

export default Listado;