import React, { useEffect,useState } from 'react';

import styled from 'styled-components';
import axios from 'axios';


import Header from './Header';
import Input from './Input';
import Message from './Message';


const ChatContent = ({ currentUser, user }) => {

    const [messages,setMassages] = useState([])

    useEffect(() => {
        console.log("inja")
        const getMessages = async () => {
            const response = await axios.post("http://localhost:4000/message/all", { from: user._id, to: currentUser._id });
            console.log(response.data)
            setMassages(response.data)
        };
        getMessages()

    }, [currentUser])

    return (
        <>
            <Container>
                <Header currentUser={currentUser} />
                <Message messages= {messages} />
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