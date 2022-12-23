import styled, { keyframes } from 'styled-components';
import * as variable from '../styles/Variables.styled'

export const LoadingBlock = styled.div`
    background-color: ${variable.blue};
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`

export const LoadingAnimationBlock = styled.div`
    display: flex;
    align-items: center;
`

export const LoadingAnimation = styled.span`
    width: 10px;
    height: 10px;
    background-color: ${variable.greyLight};
    border-radius: 50%;
    margin: 0 5px;
    &:nth-of-type(1) {
        animation: loadingAnimation 1s linear infinite;
    }
    &:nth-of-type(2) {
        animation: loadingAnimation 1s linear infinite;
        animation-delay:.33s;
    }
    &:nth-of-type(3) {
        animation: loadingAnimation 1s linear infinite;
        animation-delay:.66s;
    }

    @keyframes loadingAnimation {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0);
        }
    }
`