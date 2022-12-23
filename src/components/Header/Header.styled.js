import styled from 'styled-components';
import * as variable from '../styles/Variables.styled'

export const HeaderBlock = styled.header`
    padding: 20px 0;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 12px;
    top: 10px;
    width: 95%;
    margin: 0 auto;
    background-color: rgba(${variable.rgbBlue}, .8);
    z-index: 100;
    backdrop-filter: blur(20px);
`

export const LogoLink = styled.a`

`

export const Nav = styled.nav`
    @media (max-width: 1024px) {
        position: absolute;
        left: 50%;
        width: 95%;
        bottom: 1px;
        transform: translate(-50%, 100%);
        background-color: rgba(${variable.rgbBlue}, .8);
        backdrop-filter: blur(20px);
        z-index: 100;
        height: 0;
        overflow: hidden;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;

        &:is(.navOpen) {
            height: auto;
        }
    }
`

export const MenuButton = styled.button`
    background-color: transparent;
    display: none;

    @media (max-width: 1024px) {
        display: block;
    }
`

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    @media (max-width: 1024px) {
        flex-direction: column;
        padding: 30px;
    }
`

export const NavItem = styled.li`
    margin-left: 30px;

    &:last-child {
        margin-right: 20px;
    }

    @media (max-width: 1024px) {
        margin-right: 0;
        margin-bottom: 25px;
    }
`

export const NavLink = styled.a`
    color: ${variable.white};
    position: relative;
    font-size: 20px;
    &:hover {
        color: ${variable.orange};
    }
    @media (max-width: 1024px) {
        font-size: 24px;
    }
`

export const NavButton = styled.button`
    color: ${variable.white};
    font-size: 20px;
    background-color: ${variable.orange};
    border: 2px solid ${variable.orange};
    padding: 7px 14px;
    border-radius: 24px;
    &:hover {
        background-color: transparent;
        color: ${variable.orange};
    }
    @media (max-width: 1024px) {
        font-size: 24px;
    }
`