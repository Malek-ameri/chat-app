import React, { useEffect,useState } from 'react';

import styled from 'styled-components';
import axios from 'axios';


import Header from './Header';
import Input from './Input';
import Message from './Message';


const ChatContent = ({ currentUser, user }) => {

    const [messages,setMassages] = useState([])

    useEffect(() => {

        const getMessages = async () => {
            const response = await axios.post("http://localhost:4000/message/all", { from: user._id, to: currentUser._id });
            setMassages(response.data)
        };
        getMessages()

    }, [currentUser]);

    const addNewMessage = ( message ) =>{
        setMassages([...messages,message])
    }

    return (
        <>
            <Container>
                <Header currentUser={currentUser} />
                <Message messages= {messages} />
                <Input  currentUser={currentUser} user={user} addNewMessage={addNewMessage} />
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