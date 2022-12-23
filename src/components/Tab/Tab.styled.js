import styled from 'styled-components';
import * as variable from '../styles/Variables.styled'

export const TabBlock = styled.button`
    padding: 5px 16px;
    margin-right: 6px;
    margin-bottom: 6px;
    border-radius: 18px;
    color: ${variable.orange};
    background-color: transparent;
    border: 2px solid ${variable.orange};
    outline: none;
    font-size: 14px;
    font-weight: 500;

    &:hover {
        color: ${variable.blue};
        background-color: ${variable.orange};
    }

    &:is(.tabActive) {
        color: ${variable.blue};
        background-color: ${variable.orange};

        &:hover {
            color: ${variable.orange};
            background-color: transparent;
    }
    }
`