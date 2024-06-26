import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaUserFriends, FaUserPlus } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import ChatList from './components/ChatList';
import FriendList from './components/FriendList';
import { CurrentPage, DisplayProps } from './types';
import FriendAdd from './components/FriendAdd';
const ChatFriendPage: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {

    const [currentPage, setCurrentPage] = useState<string>(CurrentPage.CHAT_LIST)
    const [chatDisplay, setChatDisplay] = useState<boolean>(true);
    const [friendDisplay, setFriendDisplay] = useState<boolean>(false);
    const [addDisplay, setAddDisplay] = useState<boolean>(false);

    const setPage = (page: string) => {
        setCurrentPage(page);
        if (page === CurrentPage.FRIEND_LIST) {
            setFriendDisplay(true)
            setChatDisplay(false)
            setAddDisplay(false)
        }
        if (page === CurrentPage.CHAT_LIST) {
            setChatDisplay(true)
            setFriendDisplay(false)
            setAddDisplay(false)
        }
        if (page === CurrentPage.FRIEND_ADD) {
            setAddDisplay(true)
            setChatDisplay(false)
            setFriendDisplay(false)
        }
    }

    return (
        <ChatFriendContainer>
            <Title>{currentPage}</Title>
            {chatDisplay ?
                <ChatListContainer display={chatDisplay}>
                    <ChatList />
                </ChatListContainer> : null}
            {friendDisplay ?
                <FriendListContainer display={friendDisplay}>
                    <FriendList setPage={setPage} />
                </FriendListContainer> : null}
            {addDisplay ?
                <FriendAddContainer display={addDisplay}>
                    <FriendAdd setPage={setPage} />
                </FriendAddContainer> : null}
            <NavigationBar>
                <BsChatDotsFill onClick={() => { setPage(CurrentPage.CHAT_LIST) }} />
                <FaUserFriends onClick={() => { setPage(CurrentPage.FRIEND_LIST) }} />
                <FaUserPlus onClick={() => { setPage(CurrentPage.FRIEND_ADD) }} />
            </NavigationBar>
        </ChatFriendContainer>
    )
}

export default ChatFriendPage

const ChatFriendContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    border: 1px solid lightgray;
    border-radius: 20px;
    width: 330px;
    height: 570px;
    background-color: white;
    padding: 15px 0px 0px 0px;
`

const Title = styled.div`
    height: 40px;
    font-size: 25px;
    font-weight: bold;
    padding-left: 15px;
    box-shadow: 0px 10px 10px 1px whitesmoke;
`

const FriendListContainer = styled.div<DisplayProps>`
    display: ${props => props.display ? "block" : "none"};
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    height: 470px;
`
const FriendAddContainer = styled.div<DisplayProps>`
    display: ${props => props.display ? "block" : "none"};
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    height: 470px;
`

const ChatListContainer = styled.div<DisplayProps>`
    display: ${props => props.display ? "block" : "none"};
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    height: 470px;
`

const NavigationBar = styled.div`
    /* border: 1px solid black; */
    height: 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 8px 0px 8px 0px;

    & svg {
        font-size: 35px;
        cursor: pointer;
    }
`