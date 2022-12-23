import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../CartContext/CartContext'
import Game from '../Game/Game'
import Search from '../Search/Search'
import { ContainerWrap, Main, NoGames, Option, Wrap } from '../styles/Layout.styled'
import { NoGamesLink, NoGamesText, Title, TitleSmall } from '../styles/Typography.styled'
import { PriceFilter, PriceFilterHolder, PriceFilterText, StoreBlock } from './Store.styled'

export default function Store(props) {
  const cartGame = useContext(CartContext);
  const [allCart, setAllCart] = useState([])

  const filteredGames = allCart.filter((game, i) => {
    return game.name.toLowerCase().includes(props.search.toLowerCase())
  })

  const selectedPriceFilter = (e) => {
    const value = e.target.value;
    if(value === 'Lowest price') {
      setAllCart([...allCart.sort((game1, game2) => game1.price - game2.price)])
    }
    if(value === 'Highest price') {
      setAllCart([...allCart.sort((game1, game2) => game2.price - game1.price)])
    }
  }

  useEffect(() => {
    setAllCart(cartGame.cart)
  }, [cartGame])

  const handleGames = () => {
    if(cartGame.cart.length === 0) {
      return <NoGames>
        <TitleSmall>Your Cart is Empty!</TitleSmall>
        <NoGamesText>Currently there are no games in the cart</NoGamesText>
        <NoGamesLink href='/games'>Back to Games</NoGamesLink>
      </NoGames>
    } else {
      return filteredGames.map((game, i) => {
        return (
          <Game
          name={game.name}
          price={game.price}
          image={game.image}
          id={game.id}
          genre={game.genre}
          key={i}
          />
        )
      })
    }
  }
  return (
    <Main>
      <StoreBlock>
      <Search search={props.search} setSearch={props.setSearch} />
        <Wrap>
          <Title>Store</Title>
          <PriceFilterHolder>
            <PriceFilterText>Filter by price:</PriceFilterText>
            <PriceFilter onChange={selectedPriceFilter}>
              <Option>Choose</Option>
              <Option>Lowest price</Option>
              <Option>Highest price</Option>
            </PriceFilter>
          </PriceFilterHolder>
          <ContainerWrap>
            {
              handleGames()
            }
          </ContainerWrap>
        </Wrap>
      </StoreBlock>
    </Main>
  )
}
