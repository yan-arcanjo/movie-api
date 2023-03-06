import { Container, Movie, MovieList } from "./styles";

function Home() {

    const movies = [
        {
            title: 'Spider-man',
            image_url: 'https://m.media-amazon.com/images/I/91THlJb4lvL.jpg'
        },
        {
            title: 'Spider-man',
            image_url: 'https://m.media-amazon.com/images/I/91THlJb4lvL.jpg'
        },
        {
            title: 'Spider-man',
            image_url: 'https://m.media-amazon.com/images/I/91THlJb4lvL.jpg'
        },
    ]

    return(
        <Container>
            <h1>Movies</h1>
            <MovieList>
                {
                    movies.map((movie)=>{
                        return(
                            <Movie>
                                <a href="https://www.google.com.br"><img src={movie.image_url} alt="spider-man"  /></a>
                                <span>{movie.title}</span>
                            </Movie>
                        )
                    })
                }
            </MovieList>
        </Container>
    )  
}

export default Home;