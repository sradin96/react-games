import styled from 'styled-components';
import * as variable from '../styles/Variables.styled'

export const GameCard = styled.div`
    background-color: ${variable.blue};
    color: ${variable.white};
    width: calc(100% / 4 - 60px / 4);
    margin-right: 20px;
    margin-bottom: 20px;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 4px 4px 30px rgb(20 33 61 / 50%);
    transition: transform .4s ease-in;
    z-index: 1;

    &:is(.card-active) {
        transform: scale(1.2);
        z-index: 2;
    }

    @media (min-width: 1025px) {
        &:nth-of-type(4n) {
            margin-right: 0;
        }
    }

    @media (max-width: 1024px) {
        width: calc(100% / 2 - 20px / 2 );
        &:nth-of-type(2n) {
            margin-right: 0;
        }
    }

    @media (max-width: 767px) {
        width: 100%;
        margin-right: 0;
    }
`

export const GameLink = styled.a`
    position: absolute;
    left: 0;
    top: 0;
    height: calc(100% - 50px);
    width: 100%;
    z-index: 3;
`

export const GameImg = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const GameHolder = styled.div`
    padding: 20px;
    min-height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba(${variable.rgbBlack}, .2);
    backdrop-filter: blur(20px);
`

export const GameName = styled.h2`
    text-align: center;
    margin-bottom: 20px;
    min-height: 56px;
`

export const GameGenre = styled.span`

`

export const GameButtons = styled.div`
    display: flex;
    align-items: center;
`

export const GameButton = styled.button`
    outline: none;
    background-color: transparent;
    padding: 5px;
    border: 1px solid ${variable.white};
    border-radius: 50%;
    margin-left: 10px;

    &:hover {
        border: 1px solid ${variable.orange};
        svg {
            color: ${variable.orange};
        }
    }

    &:is(.activeHeart) {
        border: 1px solid ${variable.orange} !important;
        svg {
            color: ${variable.orange};
            animation: heartActive 1s ease;
        }
    }

    &:is(.activeCart) {
        border: 1px solid ${variable.orange} !important;
        svg {
            color: ${variable.orange};
            animation: heartActive 1s ease;
        }
    }

    @keyframes heartActive {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
`

export const GamePrice = styled.span`

`

export const GameWrapper = styled.div`
    height: 200px;
    width: 100%;
    background-color: rgba(${variable.rgbBlack}, .2);
    backdrop-filter: blur(20px);
`

export const GameVideo = styled.div`
    height: 100%;
    width: 100%;
`

export const GameIframe = styled.iframe`
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
`