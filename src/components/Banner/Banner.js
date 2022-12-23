import React from 'react'
import Game from '../Game/Game'
import { ContainerWrap, LoadMore, Wrap } from '../styles/Layout.styled'
import { Title } from '../styles/Typography.styled'
import { BannerBlock } from './Banner.styled'

export default function Banner(props) {
  return (
    <BannerBlock>
        <Wrap>
            <Title>Your Games</Title>
            <ContainerWrap>
            {
              props.games.slice(0, props.index).map((game, i) => {
                return <Game
                name={game.name}
                image={game.image}
                id={game.id}
                genre={game.genre}
                key={i}
                search={props.search}
                price={game.price}
                />
              })
            }
            </ContainerWrap>
            <LoadMore className={props.games.length <= props.index ? 'loadDisabled' : ''} onClick={() => {
              props.loadMore()
            }}>Load More</LoadMore>
        </Wrap>
    </BannerBlock>
  )
}
