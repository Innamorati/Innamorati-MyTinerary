import { MainDiv, TitleMovie, ImgMovie, ImgContainer, DataContainer, P } from '../style/MoviesCard'

function MoviesCards(props) {

    console.log(props.movie)

    return (
        <MainDiv key={props.movie.id}>
            <ImgContainer>
                <ImgMovie src={`https://image.tmdb.org/t/p/w500/${props.movie.backdrop_path}`}></ImgMovie>
            </ImgContainer>
            <DataContainer>
                <TitleMovie key={props.movie.id}>{props.movie.title}</TitleMovie>
                <P>{props.movie.overview}</P>
            </DataContainer>
        </MainDiv>
    )
}

export default MoviesCards;