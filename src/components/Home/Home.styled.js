import styled from 'styled-components';
import * as variable from '../styles/Variables.styled'

export const ChatBotHolder = styled.div`
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 100;

    @media (max-width: 767px) {
        display: none;
    }
`

export const ChatBot = styled.div`
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 100;
    background-color: ${variable.white};
    max-height: 400px;
    min-height: 400px;
    height: 100%;
    max-width: 260px;
    width: 100%;
    padding-bottom: 30px;
    border-radius: 12px;
    overflow: hidden;
    transition: all .4s ease-in;

    &:is(.chatInActive) {
        max-width: 0;
        max-height: 0;
        min-height: 0;
    }

    .react-chatbot-kit-chat-header {
        padding: 5px;
        text-align: center;
        background-color: ${variable.orange};
        color: ${variable.white};
        font-weight: 700;
        font-size: 18px;
    }

    .react-chatbot-kit-chat-inner-container,
    .react-chatbot-kit-chat-container {
        height: 100%;
    }

    .react-chatbot-kit-chat-message-container {
        padding: 10px;
        height: calc(100% - 30px);
        overflow: scroll;
    }

    .react-chatbot-kit-user-chat-message-container {
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: row-reverse;
        margin-bottom: 15px;
    }

    .react-chatbot-kit-user-avatar {
        width: 20px;
        height: 20px;
        svg {
            width: 100%;
            height: 100%;
        }
    }

    .react-chatbot-kit-chat-input-container {
        width: 100%;
        height: 40px;
        position: absolute;
        left: 0;
        bottom: 0;
    }

    .react-chatbot-kit-chat-input-form{
        display: flex;
        align-items: flex-end;
        border-top: 1px solid ${variable.black};
    }

    .react-chatbot-kit-chat-input {
        width: 100%;
        height: 40px;
        padding: 5px;
        color: ${variable.black};
        font-size: 16px;
        outline: none;
        border: none;
    }

    .react-chatbot-kit-chat-btn-send {
        width: 50px;
        height: 40px;
        position: relative;
        background-color: ${variable.orange};
        border: none;
        z-index: 1;
        svg {
            width: 20px;
            height: 20px;
            fill: ${variable.white};
        }
    }

    .react-chatbot-kit-chat-bot-message-container {
        display: flex;
        justify-content: flex-start;
        flex-direction: row-reverse;
        align-items: center;
        margin-bottom: 15px;
    }

    .react-chatbot-kit-chat-bot-message {
        padding: 5px 12px;
        border-radius: 20px;
        background-color: ${variable.blue};
        color: ${variable.white};
        max-width: calc(100% - 30px)

        span {
            display: block;
        }
    }

    .react-chatbot-kit-user-chat-message {
        padding: 5px 12px;
        border-radius: 20px;
        background-color: ${variable.orange};
        color: ${variable.white};
        max-width: calc(100% - 30px)
    }

    .react-chatbot-kit-user-avatar {
        margin-right: 10px;
    }

    .react-chatbot-kit-chat-bot-avatar {
        margin-left: 10px;
        width: 20px;
        height: 20px;
    }
`

export const ChatHeader = styled.div`
    padding: 8px 10px;
    background-color: ${variable.orange};
    text-align: center;
    color: ${variable.white};
    font-weight: 700;
    font-size: 18px;
    position: relative;
`

export const ChatBotBlock = styled.div`
    margin-left: 15px;
`

export const ChatBotButton = styled.button`
    position: fixed;
    right: 30px;
    bottom: 30px;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: ${variable.orange};
    border-radius: 50%;
    border: 2px solid ${variable.blue};
    transition: .4s ease-in;
    transition-property: background-color, border;

    svg {
        width: 30px;
        height: 30px;
        color: ${variable.white};
        pointer-events: none;
    }

    &:hover {
        border: 2px solid ${variable.orange};
        background-color: ${variable.blue};
    }
`

export const ChatClose = styled.button`
    position: absolute;
    right: 10px;
    top: 8px;
    z-index: 2;
    background-color: transparent;

    svg {
        width: 22px;
        height: 22px;
        pointer-events: none;
    }
`

export const ChatBotClosedMessage = styled.div`
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translate(-30%,-140%);
    width: 200px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    border-radius: 12px;
    color: ${variable.black};
    animation: toggleCLosedMessage 10s infinite;
    font-weight: 600;
    animation-delay: 5s;
    visibility: hidden;
            opacity: 0;

    &:is(.chatMessageInActive) {
        display: none;
    }

    @keyframes toggleCLosedMessage {
        0% {
            visibility: hidden;
            opacity: 0;
        }
        50% {
            visibility: visible;
            opacity: 1;
        }
        100%  {
            visibility: hidden;
            opacity: 0;
        }
    }
`