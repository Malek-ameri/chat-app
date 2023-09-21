import React, { useState } from 'react';

import styled from 'styled-components';
import { IoMdSend } from "react-icons/io";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const Input = ({ currentUser, user, addNewMessage, socket }) => {
    const [msg, setMsg] = useState("")

    const submitHandler = async (event) => {
        event.preventDefault();
        if (msg && msg?.trim()) {
            await axios.post("http://localhost:4000/message", {
                from: user._id,
                to: currentUser._id,
                message: msg

            });
            socket.current.emit("send-msg", {
                from: user._id,
                to: currentUser._id,
                message: msg
            })
            
            addNewMessage({id:uuidv4(),fromSelf:true,message:msg})
            setMsg("")
        }
    }
    return (
        <Container >
            <form className="input-container" onSubmit={submitHandler} >
                <input
                    type="text"
                    placeholder="Write your message"
                    onChange={(e) => setMsg(e.target.value)}
                    value={msg}
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
            background-color: #34baeb;
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
        cursor: pointer;
    }
  }
}`;

export default Input;