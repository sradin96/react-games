import React from 'react'
import AddGame from '../AddGame/AddGame'
import { ExitIcon } from '../styles/Icons.styled'
import { Wrap } from '../styles/Layout.styled'
import { PopupBlock, PopupClose, PopupHoler, PopupTitle } from './Popup.styled'

export default function Popup(props) {
    if(!props.isOpen) return
  return (
    <PopupBlock open={props.isOpen}>
        <Wrap>
            <PopupHoler>
                <PopupClose onClick={() => props.setIsOpen(false)}><ExitIcon></ExitIcon></PopupClose>
                <PopupTitle>Add Game</PopupTitle>
                <AddGame validForm={props.validForm} submitGame={props.submitGame} inputRef={props.inputRef} selectRef={props.selectRef} imageRef={props.imageRef} activeRef={props.activeRef} priceRef={props.priceRef} />
            </PopupHoler>
        </Wrap>
    </PopupBlock>
  )
}
