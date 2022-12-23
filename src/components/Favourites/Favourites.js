import React, { useContext } from 'react'
import FavouritesContext from '../FavouritesContext/FavouritesContext';
import Game from '../Game/Game';
import { ContainerWrap, Main, NoGames, Wrap } from '../styles/Layout.styled'
import { NoGamesLink, NoGamesText, Title, TitleSmall } from '../styles/Typography.styled';
import { FavouritesBlock } from './Favourites.styled';

export default function Favourites() {
  const favouriteGame = useContext(FavouritesContext);

  const handleGames = () => {
    if(favouriteGame.favourites.length === 0) {
      return <NoGames>
        <TitleSmall>No Favourite Games</TitleSmall>
        <NoGamesText>Currently there are no favourite games</NoGamesText>
        <NoGamesLink href='/games'>Back to Games</NoGamesLink>
      </NoGames>
    } else {
      return allGames()
    }
  }

  const allGames = () => {
    return favouriteGame.favourites.map((game, i) => {
        return (
          <Game
          name={game.name}
          image={game.image}
          id={game.id}
          genre={game.genre}
          key={i}
          />
        )
      })
    }

  return (
    <>
        <Main>
          <FavouritesBlock>
            <Wrap>
              <Title>Favourites</Title>
              <ContainerWrap>
                {
                  handleGames()
                }
              </ContainerWrap>
            </Wrap>
          </FavouritesBlock>
        </Main>
    </>
  )
}
