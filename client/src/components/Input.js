import React from 'react';

import styled from 'styled-components';
import { IoMdSend } from "react-icons/io";

const Input = () => {
    return (
        <Container>
            <form className="input-container"  >
                <input
                    type="text"
                    placeholder="Write your message"
                //   onChange={(e) => setMsg(e.target.value)}
                //   value={msg}
                />
                <button type="submit">
                    <IoMdSend />
                </button>
            </form>
        </Container>
    );
};

const Container = styled.div`
  height: 10%;
  width:100%;
  background-color: white;
  box-sizing: border-box;
  form{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5px;
    input{
        width: 90%;
        height: 60%;
        margin-right: 5px;
        background-color: transparent;
        border: none;
        padding-left: 1rem;
        font-size: 1.2rem;
        &::selection {
            background-color: #9a86f3;
        }
        &:focus {
            outline: none;
        }
    }
    button{
        height: 100%;
        padding: 0.7rem 2rem;
        background-color: #32465a;
        border: none;
        color:white;
        font-size: 2rem;
        
    }
  }
}`;

export default Input;