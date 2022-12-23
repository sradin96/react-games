import React from 'react'
import Filters from '../Filters/Filters'
import Game from '../Game/Game'
import Search from '../Search/Search'
import { ContainerBetween, ContainerWrap, LoadMore, Main, Wrap } from '../styles/Layout.styled'
import { Title } from '../styles/Typography.styled'
import { GamesBlock } from './Games.styled'

export default function Games(props) {
  return (
    <>
    <Main>
        <GamesBlock>
            <Wrap>
                <Title>All Games</Title>
                <ContainerBetween>
                  <Filters search={props.search} setSearch={props.setSearch} />
                  <Search search={props.search} setSearch={props.setSearch} />
                </ContainerBetween>
                <ContainerWrap>
                  {
                    props.filteredGames.map((game, i) => {
                      return <Game
                      name={game.name}
                      price={game.price}
                      image={game.image}
                      id={game.id}
                      genre={game.genre}
                      key={i}
                      video={game.video}
                      search={props.search}
                      />
                    })
                  }
                </ContainerWrap>
            </Wrap>
        </GamesBlock>
    </Main>
    </>
  )
}
