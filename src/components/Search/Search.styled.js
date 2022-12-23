import styled from 'styled-components';
import * as variable from '../styles/Variables.styled'

export const SearchBlock = styled.div`
    padding: 50px 0;
`

export const SearchForm = styled.form`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    position: relative;

    input {
        margin-left: 15px;
        padding-right: 45px;
    }

    button {
        position: absolute;
        right: 0;
        top: 0;
        border: none;
        background-color: transparent;
        outline: none;
        height: 100%;
        width: 40px;
        padding: 0;
    }
`