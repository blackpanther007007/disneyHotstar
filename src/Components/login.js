import React from "react";
import styled from "styled-components";

function Login(props) {
  return (
    <>
      <Container>
        <Content>
          <BgImg />

          <Actions>
            <ActionsLogoOne src="/images/cta-logo-one.svg" /> 
            <SignUp>GET ALL THERE </SignUp>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              perferendis placeat soluta incidunt odit impedit ipsa molestiae
              voluptas, pariatur vitae. Quia sunt dolor, nesciunt voluptate
              eveniet error necessitatibus obcaecati incidunt. Nam aliquid
              sapiente vero facilis cupiditate impedit officiis!
            </Description>
            <ActionsLogotwo src="/images/cta-logo-two.png"></ActionsLogotwo>
          </Actions>
        </Content>
      </Container>
    </>
  );
}

const Container = styled.section`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
   margin-bottom:10vw;
   width:100%;
   position:relative;
   min-height:100vh;
   box-sizing:border-box;
   display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:column; 
   color:white;
   padding:20px;
   height:100%
`;
const BgImg = styled.div`
  background-image: url("/images/login-background.jpg");
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  position: absolute;
`;

const Actions = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  margin-top: 0;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
  margin: 0;
`;
const ActionsLogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
  margin: 0;
`;
const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1 px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
   
    cursor: pointer;
  
  }
`;
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 15px;
  margin: 0 0 24px;
  letter-spacing: 1.5px;
  line-height: 1.5;
  &:hover{
    cursor: pointer;
  }
`;
const ActionsLogotwo = styled.img`
  margin-bottom: 12px;
  max-width: 800px;
  min-height: 1px;
  display: inline-block;
  width: 100%;
  margin: 0;

  &:hover{
    cursor: pointer;
  }
`;
export default Login;
