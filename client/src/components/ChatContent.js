import React from 'react';

import styled from 'styled-components';
import Header from './Header';
import Input from './Input';


const ChatContent = ({ currentUser }) => {
    console.log(currentUser)
    return (
        <>
            <Container>
                <Header currentUser={currentUser} />
                <Input />
            </Container>
        </>
    );
};


const Container = styled.div`
  height: 100%;
  width:100%;
  background-color:#e6eaea
}`;

export default ChatContent;