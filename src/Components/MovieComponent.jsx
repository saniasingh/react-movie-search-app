import styled from "styled-components";

const MovieContainer = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
width: 260px;
box-shadow: 0 3px 10px 0 #aaa;
cursor: pointer;
`;

const MovieImage = styled.img`
object-fit: cover;
height: 448px;
`;

const MovieName = styled.span`
font-size: 18px;
font-weight: 600;
color: Black;
margin: 15px 0;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
`

const InfoColumn = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const MovieInfo = styled.span`
font-sixe: 16px;
font-weight: 500;
color: Black;
text-transform: capatalize;
`



const MovieComponent = (props) => {
  const {Title, Year, imdbID, Poster, Type} = props.movie

 return ( <div>
    <MovieContainer onClick={() => {
        props.onMovieSelect(imdbID)
    }}>
    <MovieImage src={Poster} />
     <MovieName>{Title}</MovieName>
     <InfoColumn>
        <MovieInfo>Year: {Year}</MovieInfo>
        <MovieInfo>Type: {Type}</MovieInfo>
     </InfoColumn>
    </MovieContainer>


 </div>
 )
}

export default MovieComponent;