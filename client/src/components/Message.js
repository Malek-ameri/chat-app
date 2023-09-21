import React,{useRef,useEffect} from 'react';

import styled from 'styled-components';


const Message = ({ messages }) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        scrollRef?.current?.scrollIntoView({ behavior: 'smooth' });
    },[messages])

    return (
        <Container   >
            {
                messages.map(msg => <div ref={scrollRef} key={msg.id}  className={`message ${msg.fromSelf ? "user-message" : "current-user-msg"}`} ><p>{msg.message}</p></div>)
            }
        </Container >
    );
};

const Container = styled.div`
  height: 80%;
  width:100%;
  overflow: auto;
  background-color: #e6eaea;
  &::-webkit-scrollbar {
    width: 0.2rem;
    &-thumb {
      background-color: #32465a;
      width: 0.1rem;
      border-radius: 1rem;
    }
  }
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