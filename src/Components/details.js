import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import db from '../firebase';
import {useEffect } from "react";
function Details() {
      const location = window.location.pathname;
       var id=location.substring(location.lastIndexOf('/')+1);
       const [dt,setDt]=useState({});
       useEffect(() => {
       
        db.collection('movies').onSnapshot((snapshot)=>{
            snapshot.docs.map((doc)=>{
              
               var k=id;
               var p=doc.id;
             
               if(p===k)
               {
                setDt({id:doc.id, ...doc.data()});
                console.log(dt);
               }
            })
        })
        
       }, [])
       
       
    const back=dt.backgroundImg;
    const titl=dt.titleImg;
    const subtitle=dt.subtitle;
    const desc=dt.description;
    console.log(subtitle);
    
  return (
    <Container>
      <Background>
        <img src={back} alt="" />
      </Background>
      <Imgtitle>
        <img src={titl} alt="" />
      </Imgtitle>
      <Contentmeta>
          <Controls>
            <Player>
                <img src="/images/play-icon-black.png" alt="" />
                <span>play  </span>
            </Player>
            <Trailer>
                <img src="/images/play-icon-white.png" alt="" />
                <span>Trailer</span>
            </Trailer>
            <AddList>
              <span></span>
              <span></span>
            </AddList>
            <GroupWatch>
              <div>
                <img src="/images/group-icon.png" alt="" />
              </div>
            </GroupWatch>
          </Controls>
          <Content>
            <Subtitle>
             {subtitle}
            </Subtitle>
            <Description>
             {desc}
            </Description>
          </Content>
      </Contentmeta>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;
const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img{
    width: 100vw;
    height: 100vh;

    @media (max-width:760px)
    {
        width: initial;
    }
  }
`;
const Imgtitle=styled.div`
align-items: flex-end;
display: flex;
-webkit-box-pack:start;
justify-content: flex-start;
margin: 0px;
height: 23vw;
min-height: 170px;
padding-bottom: 24px;
width: 100%;
@media (max-width:768px)
{
  height:30vw;
}
img{
    max-width: 600px;
    min-width:200px;
    width: 35vw;

}


`

const Contentmeta=styled.div`
max-width: 874px;


`;
const Controls=styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
margin: 24px 0px;
min-height: 56px;
`;
const Player=styled.button`
font-size:15px;
margin: 0px 22px 0px 0px;
padding: 0px 24px;
height: 56px;
border-radius:4px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
letter-spacing: 1.8px;
text-align: center;
text-transform: uppercase;
img{
    width: 32px;
}

&:hover{
    background:rgba(198,198,198);
}
@media (max-width:760px)
{
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img{
        width: 25px;
    }
 
}
`;

const Trailer=styled(Player)`
background:rgba(0,0,0,0.3);
border: 1px solid rgba(249 ,249 ,249);
color: rgba(243,243,243);

&:hover{
        color:black;
    }
`

const Content=styled.div`
  display: flex;
  /* justify-content: */
   flex-direction: column;
  
  

  ;

`
const Subtitle=styled.div`
     display: block;
     font-size: 20px;


     @media  (max-width:768px)
     {
      font-size:18px;
     }

`
const Description=styled.p`
     display: block;
     font-size: 20px;
     width: 850px;
     @media (max-width:768px){
      font-size: 10px;
      width: 300px;
     }

`
const AddList=styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: 15px;
width: 44px;
height: 44px;
background-color:rgba(0,0,0,0.6);
cursor:pointer;
border-radius: 50%;

  span{
      background-color: rgba(249,249,249);
      display: inline-block;


      &:first-child{
        height: 1.5px ;
        width:  16px;
        transform : translate(0px,0px) rotate(0deg);
       
      }
      &:nth-child(2){
        height: 16px;
        transform: translateX(-8px) rotate(0deg);
        width: 2px;
      }

  }
`
const GroupWatch=styled.div`
width: 44px;
height:44px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
background: white;
   div{
     height: 40px;
     width: 40px;
     background:rgb(0,0,0);
     border-radius: 50%;
  
     
     img{
         width:100%; 
     }

    }

`
export default Details;
