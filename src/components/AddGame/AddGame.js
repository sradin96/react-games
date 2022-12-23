import React from 'react'
import { Chevron } from '../styles/Icons.styled'
import { Input, InputBlock, Label, Option, Select, SelectLabel, Submit } from '../styles/Layout.styled'
import { FormError, GameForm } from './AddGame.styled'
import data from './data.json'

export default function AddGame(props) {
  return (
    <GameForm onSubmit={(e) => props.submitGame(e)}>
        <InputBlock>
            <Label>Game Name:</Label>
            <Input ref={props.inputRef} id="gameName" type='text' />
        </InputBlock>
        <InputBlock>
            <Label>Image Url:</Label>
            <Input ref={props.imageRef} id="gameImage" type='text' />
        </InputBlock>
        <InputBlock>
            <Label>Game Price:</Label>
            <Input ref={props.priceRef} id="gamePrice" type='text' />
        </InputBlock>
        <InputBlock>
            <Label>Genre:</Label>
            <SelectLabel>
                <Select ref={props.selectRef}>
                <Option>Choose Genre</Option>
                    {
                        data.genres.map((genre, i) => {
                            return (
                                <Option key={i}>{genre}</Option>
                            )
                        })
                    }
                </Select>
                <Chevron></Chevron>
            </SelectLabel>
        </InputBlock>
        {
            !props.validForm ? <FormError>All fields cannot be empty!</FormError> : ''
        }
        <Submit type='submit'>Submit</Submit>
    </GameForm>
  )
}
