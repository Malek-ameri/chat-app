import React from 'react';

import styled from 'styled-components';

import Logo from '../image/user-default-avatar.jpeg';
import Contact from './Contact';

const Contacts = ({ user, contacts, changeHandler }) => {


  return (
    <Container>

      <div className='current-user'>
        <img src={Logo} />
        <p>{user?.username}</p>
      </div>

      <div className='all-user'>
        {contacts.map((item, index) => <Contact key={item._id} contact={item} index={index} changeHandler={changeHandler} />)}
      </div>
    </Container>


  );
};

const Container = styled.div`
   height: 100%;
   overflow: hidden;
  .current-user{
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid rgb(94, 94, 134) ;
    img{
        width:50px;
        height: 50px;
        margin-right: 20px;
    }
    p{
        color:white;
    }
  }
  .all-user{
    height: 77%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.3rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
  }

}`;

export default Contacts;