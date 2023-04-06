import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { selecttrending } from '../features/movies/movie';
function Trending() {
    const movies=useSelector(selecttrending);
  return (
    <Container>
    <h4>Trending </h4>
    <Content >
    {
    movies && movies.map((movie,key) => (
        <Wrap key={key}>{movie.id}
        <Link to={"/detail/"+movie.id}>
             <img src={movie.cardImg} alt ={movie.title}></img>
        </Link>
        </Wrap>
         ))
    }
    </Content>
    
    </Container>
  )
}
const Container=styled.div`
display: grid;
grid-template-columns: minmax(0,4);

`;
const Content=styled.div`
display: grid;
grid-gap: 35px;
gap: 35px;
padding: 29px;
justify-content: center;

grid-template-columns: repeat(4,minmax(0,1fr)); 
@media (max-width:768px)
{
    grid-template-columns: repeat(2,minmax(0,1fr));
}

`;
const Wrap =styled.div`
padding-top: 56.25%;
border-radius:10px;
box-shadow:rgb(0 0 0 /69%) 0px 26px 30px --10px,
rgba(0 0 0 /73%) 0px 16px 10px --10px;
cursor: pointer;
overflow: hidden;
position: relative;
transition: all 100ms cubic-bezier(0.25,0.46,0.45,0);
border: 3px solid rgba(249,249,249,0.1);
width: 100%;
img{
    inset:0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    width: 100%;
    z-index: 1;
    top: 0;

}

&:hover{
        box-shadow:rgba(0 0 0 /80%) 0px 40px 58px -16px ,
        rgba(0 0 0 /72%) 0px 30px 22px --10px;
        transform: scale(1.05);
        border-color:rgba(249,249,249,0.8) !important;
    }
`


export default Trending;