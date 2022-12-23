import styled from 'styled-components';
import * as variable from './Variables.styled'

export const Title = styled.h1`
    font-size: 54px;
    color: ${variable.white};
    text-align: center;
    display: block;
    max-width: 800px;
    width: 100%;
    margin: 0 auto 40px;
`

export const TitleSmall = styled.h2`
    font-size: 36px;
    color: ${variable.white};
    text-align: center;
    display: block;
    max-width: 800px;
    width: 100%;
    margin: 0 auto 40px;
`

export const NoGamesText = styled.p`
    color: ${variable.white};
    font-size: 18px;
    text-align: center;
`

export const NoGamesLink = styled.a`
    color: ${variable.white};
    font-size: 16px;
    text-align: center;
`

export const Counter = styled.span`
    position: absolute;
    width: 20px;
    height: 20px;
    right: 0;
    top: 0;
    transform: translate(100%, -25%);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${variable.orange};
    color: ${variable.white};
    font-size: 14px;
    font-weight: 600;
    border-radius: 50%;
`