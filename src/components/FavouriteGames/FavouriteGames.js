import React, { useEffect, useState } from 'react'
import Game from '../Game/Game'
import { ContainerWrap, Wrap } from '../styles/Layout.styled'
import { FavouriteGamesBlock, FavouriteTitle } from './FavouriteGames.styled'

export default function FavouriteGames(props) {
  return (
    <FavouriteGamesBlock>
        <Wrap>
            <FavouriteTitle>Your Favourite Games</FavouriteTitle>
            <ContainerWrap>
                {
                    <Game search={props.search} setSearch={props.setSearch} games={props.favourites}/>
                }
            </ContainerWrap>
        </Wrap>
    </FavouriteGamesBlock>
  )
}
