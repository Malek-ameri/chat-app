import React, { useEffect, useState, useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { io } from 'socket.io-client';

import api from '../interceptor/axios';
import Contacts from '../components/Contacts';
import Welcom from '../components/Welcom';
import ChatContent from '../components/ChatContent';

const Chat = () => {

    const socket = io("http://localhost:4000", {
    })

    const navigate = useNavigate()

    const [user, setUser] = useState(null)
    const [contacts, setContacts] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);


    useEffect(() => {
        const authUser = async () => {
            try {
                const response = await api.get("auth/user")
                if (response.status === 200) {
                    setUser(response.data.data)
                }

                const allUser = await api.get("user")
                if (allUser.status === 200) {
                    setContacts(allUser.data.data)
                }
            } catch (error) {
                navigate("/login")
            }
        }
        authUser()
    }, [])

    const changeCurrentUserHandler = (index, data) => {
        setCurrentUser(data)
    }


    return (
        <>
            {user ?
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
                    <Container>
                        <div className='contacts'>
                            <Contacts user={user} contacts={contacts} changeHandler={changeCurrentUserHandler} />
                        </div>

                        {currentUser ? <ChatContent user={user} currentUser={currentUser} /> : <Welcom user={user} />}
                    </Container>
                </div> : <h1>loading</h1>}
        </>)

};

const Container = styled.div`
  display: flex;
  font-size: 20px;
  width: 75vw;
  height: 75vh;
  .contacts{
    width: 30%;
    height: 100%;
    background-color: #2c3e50;
}`;

export default Chat;