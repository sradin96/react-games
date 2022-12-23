import React from 'react'
import { SearchIcon } from '../styles/Icons.styled'
import { Input, InputBlock, Label, Submit, Wrap } from '../styles/Layout.styled'
import { SearchBlock, SearchForm } from './Search.styled'

export default function Search(props) {
  return (
    <SearchBlock>
        <Wrap>
            <SearchForm>
                <InputBlock>
                    <Label>Find Your Game:</Label>
                    <Input value={props.search} onChange={(e) => props.setSearch(e.target.value)}/>
                </InputBlock>
                <Submit onClick={(e) => e.preventDefault()}><SearchIcon></SearchIcon></Submit>
            </SearchForm>
        </Wrap>
    </SearchBlock>
  )
}
