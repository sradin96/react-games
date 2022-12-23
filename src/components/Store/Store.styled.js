import styled from 'styled-components';
import * as variable from '../styles/Variables.styled'

export const StoreBlock = styled.section`
    padding: 100px 0 50px;
`

export const PriceFilterHolder = styled.div`
    margin-bottom: 30px;
    width: 100%;
    display: flex;
    align-items: center;
`

export const PriceFilterText = styled.span`
    color: ${variable.white};
    font-size: 20px;
    font-weight: 700;
    margin-right: 20px;
    display: block;
`

export const PriceFilter = styled.select`
    border-radius: 12px;
    width: 160px;
    text-align: center;
    outline: none
`