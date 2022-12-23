import React from 'react'
import { Main, Wrap } from '../styles/Layout.styled'
import { Title } from '../styles/Typography.styled'
import { GameInfoBlock, GameInfoGenre, GameInfoImage, GameInfoPrice } from './GameInfo.styled'

export default function GameInfo(props) {
  return (
    <Main>
        <GameInfoBlock>
            <GameInfoImage style={{backgroundImage: `url(${props.image})`}}></GameInfoImage>
            <Wrap>
                <Title>{props.name}</Title>
                <GameInfoGenre>{props.genre}</GameInfoGenre>
                <GameInfoPrice>{props.price}</GameInfoPrice>
            </Wrap>
        </GameInfoBlock>
    </Main>
  )
}
