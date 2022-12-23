import React, { useState } from 'react';
import { Main } from '../styles/Layout.styled';
import Search from '../Search/Search';
import Banner from '../Banner/Banner';
import HeroSlider from '../HeroSlider/HeroSlider';
import Chatbot from 'react-chatbot-kit';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import config from './config'
import { ChatBot, ChatBotButton, ChatBotClosedMessage, ChatBotHolder, ChatClose } from './Home.styled';
import { ChatBotIcon, ExitIcon } from '../styles/Icons.styled';

export default function Home(props) {
  const [chatActive, setChatActive] = useState(false)

  const toggleChat = (e) => {
    e.preventDefault();
    setChatActive(!chatActive)
  }

  return (
    <>
    <Main>
        <HeroSlider />
        <Banner index={props.index} loadMore={props.loadMore} search={props.search} games={props.games} />
        <ChatBotHolder>
          <ChatBotButton onClick={(e) => toggleChat(e)}><ChatBotIcon></ChatBotIcon></ChatBotButton>
          <ChatBotClosedMessage className={chatActive ? 'chatMessageInActive' : ''}>Talk to me, please!</ChatBotClosedMessage>
          <ChatBot className={chatActive ? '' : 'chatInActive'}>
          <ChatClose onClick={(e) => toggleChat(e)}><ExitIcon></ExitIcon></ChatClose>
            <Chatbot
            actionProvider={ActionProvider}
            messageParser={MessageParser}
            config={config}
            />
          </ChatBot>
        </ChatBotHolder>
    </Main>
    </>
  )
}
