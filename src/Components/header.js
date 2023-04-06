/* eslint-disable react/jsx-pascal-case */
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
 import {
  selectUserName,selectUserPhoto, setSignOutState, setUserLoginDetails
 } from '../features/user/userSlice';
 import { useNavigate } from "react-router-dom";
 
 
function Header(props) {
   const dispatch=useDispatch();
   
   const username=useSelector(selectUserName);
   const userPhoto=useSelector(selectUserPhoto);
   const history = useNavigate();
useEffect (()=>{
  auth.onAuthStateChanged( async (user)=>{
       if(user)
       {
        setUser(user); 
        history("/home");
       }
      
  } );
},{username,userPhoto});
  const handleAuth = () => {
    if(!username)
    {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        const user=result.user;
        setUser(user);
      })
      .catch((error) => {
        alert(error.message);
      });
    }
    else{
      auth.signOut().then(()=>{
         dispatch(setSignOutState());
         history('/');
      });
    } 
  };
  const setUser =(user)=>{

      dispatch(
        setUserLoginDetails({
          name:user._delegate.displayName,
          email:user._delegate.email,
          photo:user._delegate.photoURL,
        })
      );
      console.log(username);
  };
 

  return (
    <>
      <Navbar>
        <Nav_logo src="/images/logo.svg"></Nav_logo>
        { !username?(<><Login onClick={handleAuth}>Login</Login></>):(<><Nav_menu>
          <a href="/home">
            <img src="/images/home-icon.svg" alt="" />
            <span>Home</span>
          </a>
          <a href="/home">
            <img src="/images/search-icon.svg" alt="" />
            <span>Search</span>
          </a>
          <a href="/home">
            <img src="/images/watchlist-icon.svg" alt="" />
            <span>Watchlist</span>
          </a>
          <a href="/home">
            <img src="/images/original-icon.svg" alt="" />
            <span>Originals</span>
          </a>
          <a href="/home">
            <img src="/images/series-icon.svg" alt="" />
            <span>Series</span>
          </a>
          <a href="/home">
            <img src="/images/home-icon.svg" alt="" />
            <span>Movies</span>
          </a>
        </Nav_menu>
        <UserImg src={userPhoto}></UserImg>
        <DropDown>
       
        <SignOut onClick={handleAuth} >
          <span>Sign Out</span>
        </SignOut>
        </DropDown>
        </>)}
      </Navbar>
    </>
  );
}

const Navbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0px;
  height: auto;
  padding: 20px;
  padding-top:4px;
  padding-bottom:4px;
  background-color: #090b13;
  z-index: 3;
  letter-spacing: 4px;
  img {
    display: block;
  }
`;
const Nav_logo = styled.img`
  width: 70px;
  height: 50px;
`;
const Login = styled.div`
  width: auto;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 4%;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 8px 16px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    cursor: pointer;
  }

`;

const Nav_menu = styled.div`
  align-items: center !important;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  margin: 0px;
  position: relative;
  padding: 0px;
  margin-left: 30px;
  margin-right: auto;

  @media (max-width: 960px) {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    justify-content: center;

    img {
      height: 20px;
      min-width: 20px;
      z-index: auto;
      margin-right: 4%;
      margin-top: -4%;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: white;
        border-radius: 0px 0px 4px 4px;
        position: absolute;
        content: "";
        bottom: -6px;
        height: 2px;
        opacity: 0;
        left: 0px;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 450ms cubic-bezier(0.075, 0.46, 0.165, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        opacity: 1 !important;
        visibility: visible;
      }
    }
  }
`;
const UserImg =styled.img`
  width: 70px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #0000009e;
`;
const DropDown =styled.div`
  position: absolute;
  top: 68px;
  right: 25px;
  background: rgb(19,19,19);
  border:1px solid rgba(151,151,151,0.34);
  border-radius:4px;
  box-shadow: rgb(0,0,0 /50%);
  padding: 10px;
  font-size: 13px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    opacity: 1;
    transition-duration: 1s;
  }
`;


const SignOut =styled.div`

/* position: relative; */
height: 18px;
width: 100px;
display: flex;
justify-content: center;
align-items: center;
color: white;
margin: 0px;


&:hover{
  ${DropDown}{
    opacity: 1;
  
  }
  cursor: pointer;
}
`
export default Header;
