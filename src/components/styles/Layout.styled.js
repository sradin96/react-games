import styled from 'styled-components';
import * as variable from './Variables.styled'

export const Wrap = styled.div`
    max-width: 1240px;
    padding: 0 20px;
    width: 100%;
    margin: 0 auto;
`

export const Main = styled.main`
    width: 100%;
    position: relative;
    z-index: 2;
    overflow: hidden;
    background-color: ${variable.blue};
    min-height: 100vh;
    padding-bottom: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    margin-bottom: 288px;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
`

export const ContainerBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ContainerCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const InputBlock = styled.div`

`

export const Input = styled.input`
    border-radius: 16px;
    height: 30px;
    outline: none;
    width: 180px;
    border: none;
    padding: 10px;
`

export const Label = styled.label`
    color: ${variable.white};
    font-size: 16px;
`

export const Submit = styled.button`
    font-size: 20px;
    color: ${variable.white};
    background-color: ${variable.orange};
    border-radius: 24px;
    border: 2px solid ${variable.orange};
    padding: 10px 24px;

    &:hover {
        color: ${variable.orange};
        background-color: transparent;
    }
`

export const SelectLabel = styled.label`
    position: relative;
    outline: none;
    border: none;
    svg {
        position: absolute;
        right: 10px;
        top: 0px;
        pointer-events: none;
    }
`

export const Select = styled.select`
    padding: 5px;
    height: 30px;
    font-size: 16px;
    border-radius: 16px;
    text-align: center;
    appearance: none;
    font-weight: 700;
    outline: none;
    border: none;
    color: ${variable.black};

    &:hover {
        cursor: pointer;
    }
`

export const Option = styled.option`
    &:hover {
        cursor: pointer;
    }
`

export const LoadMore = styled.button`
    font-size: 20px;
    color: ${variable.white};
    background-color: ${variable.orange};
    border-radius: 24px;
    border: 2px solid ${variable.orange};
    padding: 10px 24px;
    display: flex;
    margin: 30px auto 0;

    &:hover {
        color: ${variable.orange};
        background-color: transparent;
    }

    &:is(.loadDisabled) {
        color: ${variable.orange};
        background-color: transparent;
        position: relative;
        overflow: hidden;
        pointer-events: none;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(50%) rotate(12deg);
            height: 3px;
            width: 100%;
            background-color: ${variable.orange};
        }
    }
`

export const NoGames = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 50px 0;
`