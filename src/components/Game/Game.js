import { useContext, useState } from 'react'
import CartContext from '../CartContext/CartContext'
import { useDebounce } from '../Debounce/Debounce'
import FavouritesContext from '../FavouritesContext/FavouritesContext'
import { CartIcon, HeartIcon } from '../styles/Icons.styled'
import { ContainerBetween } from '../styles/Layout.styled'
import { GameButton, GameButtons, GameCard, GameGenre, GameHolder, GameIframe, GameImg, GameLink, GameName, GamePrice, GameVideo, GameWrapper } from './Game.styled'

const URL_FAVOURITES = 'http://localhost:3002/favourites'
const URL_CART = 'http://localhost:3002/cart'

export default function Game(props) {
    const favouriteGame = useContext(FavouritesContext);
    const cartGame = useContext(CartContext)
    const [mouseOver, setMouseOver] = useState(false);
    const { setValue } = useDebounce()

    const handleMouseOver = () => {
        setMouseOver(true);
    }

    const handleMouseLeave = () => {
        setMouseOver(false)
    }

    const gameIsFavourite = favouriteGame.itemIsFavourite(props.id);
    const gameIsInCart = cartGame.itemInCart(props.id)

    const toggleFavouriteStatusHandle = () => {
        if(gameIsFavourite) {
            favouriteGame.removeFavourite(props.id)
            deleteFavourites(props.id)
        } else {
            const favouriteItem = {
                name: props.name,
                image: props.image,
                id: props.id,
                genre: props.genre
            }
            favouriteGame.addFavourite(favouriteItem)
            postFavourites(favouriteItem);
        }
    }

    const toggleCartStatusHandle = () => {
        if(gameIsInCart) {
            cartGame.removeCart(props.id)
            deleteCart(props.id)
        } else {
            const cartItem = {
                name: props.name,
                image: props.image,
                id: props.id,
                genre: props.genre,
                price: props.price
            }
            cartGame.addCart(cartItem)
            postCart(cartItem)
        }
    }

    const postFavourites = (data) => {
        fetch(URL_FAVOURITES, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        })
    }

    const postCart = (data) => {
        fetch(URL_CART, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        })
    }

    const deleteCart = (data) => {
        fetch(`${URL_CART}/${data}`, {
            method: 'DELETE',
        })
    }

    const deleteFavourites = (data) => {
            fetch(`${URL_FAVOURITES}/${data}`, {
                method: 'DELETE',
            })
    }

  return (
    <>
    <GameCard className={mouseOver ? 'card-active' : ''} id={props.id}>
        <GameLink onMouseOver={(e) => {
            setValue(e.target, handleMouseOver)
        }}
        onMouseLeave={(e) => {
            setValue(e.target, handleMouseLeave)
        }} href={'/games/'+props.id}></GameLink>
        <GameWrapper>
            {
                props.video ?
                mouseOver ? <GameVideo>
                    <GameIframe title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" src={`${props.video}?enablejsapi=1&autoplay=1&mute=1`}></GameIframe>
                </GameVideo>
                : <GameImg style={{backgroundImage: `url(${props.image})`}}></GameImg>
                : <GameImg style={{backgroundImage: `url(${props.image})`}}></GameImg>
            }
        </GameWrapper>
        <GameHolder>
            <GameName>{props.name}</GameName>
            {
                props.price ? <GamePrice>€{props.price}</GamePrice> : ''
            }
            <ContainerBetween>
                <GameGenre>{props.genre}</GameGenre>
                <GameButtons>
                    <GameButton className={gameIsInCart ? 'activeCart' : ''}
                    onClick={toggleCartStatusHandle}>
                        <CartIcon></CartIcon>
                    </GameButton>
                    <GameButton className={gameIsFavourite ? 'activeHeart' : ''}
                    onClick={toggleFavouriteStatusHandle}>
                        <HeartIcon></HeartIcon>
                    </GameButton>
                </GameButtons>
            </ContainerBetween>
        </GameHolder>
    </GameCard>
    </>
  )
}
