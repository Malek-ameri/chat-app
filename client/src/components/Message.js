import React from 'react';

import styled from 'styled-components';


const Message = ({ messages }) => {
    console.log(messages)
    return (
        <Container>
            {
                messages.map(msg => <div key={msg.id}  className={`message ${msg.fromSelf ? "user-message" : "current-user-msg"}`} ><p>{msg.message}</p></div>)
            }
        </Container>
    );
};

const Container = styled.div`
  height: 80%;
  width:100%;
  background-color: #e6eaea;
    .message{
        display: flex;
        justify-content: flex-end;
        p{
            width: fit-content;
            padding:10px;
            border-radius: 50px;
        }
    }
   .user-message{
        justify-content: flex-end;
        border-radius: 50px;
        p{
            margin-right: 10px;
            background-color: white;
        }
   }
    .current-user-msg{
        justify-content: flex-start;
        border-radius: 50px;
        p{
            margin-left: 10px;
            color:white;
            background-color: #435f7a ;
        }
    }
}`;

export default Message;