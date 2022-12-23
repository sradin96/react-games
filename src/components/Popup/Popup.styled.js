import styled from 'styled-components';
import * as variable from '../styles/Variables.styled'

export const PopupBlock = styled.div`
    position: fixed;
    padding: 100px 0;
    width: 100%;
    height: 100%;
    z-index: 101;
    left: 0;
    top: 0;
    background-color: rgba(${variable.rgbBlack}, .8);
`

export const PopupHoler = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
`

export const PopupTitle = styled.h2`
    color: ${variable.white};
    text-align: center;
    font-size: 54px;
    margin-bottom: 40px;
`

export const PopupClose = styled.button`
    background-color: transparent;
    position: absolute;
    right: 50px;
    top: 50px;
    &:hover {
        svg {
            color: ${variable.orange};
        }
    }
`