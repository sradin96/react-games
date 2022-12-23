import styled from 'styled-components';
import * as variable from '../styles/Variables.styled'


export const FooterBlock = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 80px 0 30px;
    background-color: ${variable.orange};
    z-index: 1;
`

export const FooterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`

export const FooterItem = styled.li`
    margin: 0 10px;
`

export const FooterLink = styled.a`
    color: ${variable.blue};
    font-weight: 600;
    font-size: 16px;
    &:hover {
        text-decoration: underline;
    }
`

export const FooterTextHolder = styled.div`
    margin-bottom: 30px;
`

export const FooterText = styled.p`
    text-align: center;
    max-width: 660px;
    width: 100%;
    margin: 0 auto;
    color: ${variable.blue};
    font-size: 14px;
`

export const Copyright = styled.div`

`