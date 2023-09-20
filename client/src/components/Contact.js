import React from 'react';
import Logo from '../image/user-default-avatar.jpeg';
import styled from 'styled-components';


const Contact = ({ contact, index, changeHandler }) => {

  return (
    <Container className='contact' onClick={() => changeHandler(index, contact)} >
      <img src={Logo} />
      <p>{contact.username}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  &:hover{
    background-color:#32465a;
    cursor: pointer;
  }
  img{
    width:40px;
    height: 40px;
    margin-right: 20px;
  }
  p{
    color: white;
    font-size:14px;
   }
`;

export default Contact;