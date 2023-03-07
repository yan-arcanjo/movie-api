import { Container, Movie, MovieList } from "./styles";
import { APIKey } from "../../config/key";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {

    const [popularMovies, setPopularMovies] = useState([])
    /* const [nowPlaying, setNowPlaying] = useState([])
    const [topRated, setTopRated] = useState([]) */
    const [pageNumber, setPageNumber] = useState(1)
    const image_path = 'https://image.tmdb.org/t/p/w500'

    const nextPage = () => {
        setPageNumber(pageNumber + 1)
    }

    const previousPage = () => {
        if(pageNumber>1){
            setPageNumber(pageNumber - 1)
        }
    }

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=${pageNumber}`)
            .then(response => response.json())
            .then(data => setPopularMovies(data.results))
    }, [pageNumber])

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKey}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => setNowPlaying(data.results))
    }, [])

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKey}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => setTopRated(data.results))
    }, [])

    return(
        <Container>
            <h1>Popular Movies</h1>
            <MovieList>
                {
                    popularMovies.map((movie)=>{
                        return(
            
                        <Movie key={movie.id}>
                            <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title}  /></Link>
                            <span>{movie.title}</span>
                        </Movie>
                            
                        )
                    })
                }
            </MovieList>

            <div className="buttons">
                <button onClick={previousPage} className="back">Back</button>
                <button onClick={nextPage} className="next">Next</button>
            </div>

           {/*  <h1>Now Playing</h1>
            <MovieList>
                {
                    nowPlaying.map((movie)=>{
                        return(
                            <Movie key={movie.id}>
                                <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title}  /></Link>
                                <span>{movie.title}</span>
                            </Movie>
                        )
                    })
                }
            </MovieList>

            <h1>Top Rated</h1>
            <MovieList>
                {
                    topRated.map((movie)=>{
                        return(
                            <Movie key={movie.id}>
                                <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title}  /></Link>
                                <span>{movie.title}</span>
                            </Movie>
                        )
                    })
                }
            </MovieList> */}
        </Container>
    )  
}

export default Home;