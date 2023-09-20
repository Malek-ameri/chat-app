import React from 'react';

import styled from "styled-components"

import Robot from '../image/robot.gif';


const Welcom = ({user}) => {
    return (
        <Container>
            <img src={Robot} alt='robot' />
            <h3>
                Welcom, <span>{user?.username}</span>
            </h3>
            <h3>
                Please select a chat to strat Messagin .
            </h3>
            
        </Container>
    );
};


const Container = styled.div`
   background-color: #e6eaea;
   width: 80%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   img {
    height: 15rem;
   }
   h3{
    margin: 0;
   }
  span {
    color: #4e0eff;
  }
`;

export default Welcom;