import styled from 'styled-components';
import * as variable from '../styles/Variables.styled'

export const GameForm = styled.form`
    width: 100%;
    padding: 30px;
    border-radius: 20px;
    background-color: rgba(${variable.rgbBlue}, .9);
    box-shadow: 5px 3px 7px 1px rgba(${variable.rgbBlue}, .6);
    backdrop-filter: blur(20px);

    label {
        display: block;
        margin-bottom: 10px;
    }

    input {
        margin-bottom: 30px;
        width: 100%;
    }

    select {
        margin-bottom: 30px;
        width: 100%;
    }

    button {
        display: block;
        margin-left: auto;
    }
`

export const FormError = styled.span`
    display: block;
    color: red;
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
    font-weight: 600;
`