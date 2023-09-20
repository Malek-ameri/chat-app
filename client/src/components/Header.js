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
  height: 13%;
  width:100%;
  border: 2px solid ;
  display: flex;
  padding:10px;
  align-items: center;
  div{
    img{
        padding-right:18px;
        width:40px;
    }
  }
}`;

export default Header;