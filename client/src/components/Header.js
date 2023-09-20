import React from 'react';

import styled from 'styled-components';

import Logo from '../image/user-default-avatar.jpeg';

const Header = ({ currentUser }) => {
    return (
        <Container >
            <div><img src={Logo} /></div>
            <p>{currentUser?.username}</p>
        </Container>
    );
};

const Container = styled.div`
  box-sizing: border-box;
  height: 10%;
  width:100%;
  display: flex;
  padding:10px;
  align-items: center;
  background-color: white;
  div{
    img{
        padding-right:18px;
        width:40px;
    }
  }
}`;

export default Header;