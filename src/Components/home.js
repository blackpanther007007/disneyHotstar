/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styled from "styled-components";
import ImgSlider from "./imgSlider";
import Recommended from "./recommende";
import Viewers from "./viewers";
import NewDisney from "./newDisney";
import Trending from "./trending";
import Originals from "./origin";

import { useEffect ,useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import db from '../firebase';
 import {selectUserName, selectUserPhoto} from "../features/user/userSlice";
import { setMovies } from "../features/movies/movie";
 
function Home() {
  const dispatch=useDispatch();
  const username=useSelector(selectUserName);
  const photo=useSelector(selectUserPhoto);
 
  let recommends=[];
  let newDisney=[];
  let originals=[];
  var trending =[];

   useEffect(()=>{
    
    db.collection('movies').onSnapshot((snapshot)=>{
      snapshot.docs.map((doc)=>{
        // console.log(trending);

        // eslint-disable-next-line default-case
        switch(doc.data().type)
        {
          case 'recommend':
            if(recommends.length<4)
            {
             recommends=[...recommends,{id:doc.id, ...doc.data()}]; 
            }
            //  console.log(recommends);
            break;
           case 'new':
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if(newDisney.length<4)
            {
            newDisney=[...newDisney,{id:doc.id, ...doc.data()}] ;
            }
            break;
             case 'original':
              if(originals.length<4)
              {
              originals=[...originals,{id:doc.id, ...doc.data()}];
              // console.log(originals);
              }
              break;
              case 'trending':
                if(trending.length<4)
                {
                trending=[...trending,{id:doc.id, ...doc.data()}];
                }
                break;
        }
      }
      )
        dispatch(
            setMovies({
              recommend:recommends,
              trending:trending,
              original:originals,
              newDisney:newDisney ,
            })
          );
    })
    



   },{username,photo}); 

  return (

      <Container>
        <ImgSlider/>
        <Viewers/>
        <Originals></Originals>
        <Recommended/>
        <NewDisney/>
        <Trending/>
      </Container>
  );
}
const Container = styled.main`
  position: relative;
  /* min-height: calc(100vh-250px); */
  overflow-x: hidden;
  display: block;
  top: 12px;
  padding: 0 calc(3.4vw+5px);
    &:after{
      background:url("images/home-background.png")  center center /cover no-repeat;
      content: "";
      position: absolute;
      inset: 0px;
      opacity: 0px;
      z-index: -1 ;
    }
    height: auto;
`;

export default Home;
