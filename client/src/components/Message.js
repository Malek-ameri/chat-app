import React from 'react';

import styled from 'styled-components';


const Message = ({ messages }) => {
    console.log(messages)
    return (
        <Container>
            {
                messages.map(msg => <div key={msg.id} >{msg.message}</div>)
            }
        </Container>
    );
};

const Container = styled.div`
  height: 80%;
  width:100%;
  background-color: #e6eaea;
}`;

export default Message;