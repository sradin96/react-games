import React, { useContext, useState } from 'react'
import { Logo, MenuIcon } from '../styles/Icons.styled'
import { HeaderBlock, LogoLink, MenuButton, Nav, NavButton, NavItem, NavLink, NavList } from './Header.styled'
import data from './data.json'
import { ContainerBetween, Wrap } from '../styles/Layout.styled'
import { useNavigate } from "react-router-dom";
import CartContext from '../CartContext/CartContext'
import { Counter } from '../styles/Typography.styled'
import FavouritesContext from '../FavouritesContext/FavouritesContext'

export default function Header(props) {
    const [navigationOpen, setNavigationOpen] = useState(false)
    const navigate = useNavigate()
    const cartGame = useContext(CartContext);
    const favouriteGame = useContext(FavouritesContext);
    const cartNumber = cartGame.cart.length;
    const favouriteNumber = favouriteGame.favourites.length;

    const toggleNavigation = (e) => {
        e.preventDefault()
        setNavigationOpen(!navigationOpen)
    }

  return (
    <HeaderBlock>
        <Wrap>
            <ContainerBetween>
                <LogoLink onClick={() => navigate('/home')}>
                    <Logo></Logo>
                </LogoLink>
                <Nav className={!navigationOpen ? '' : 'navOpen'}>
                    <NavList>
                        <NavItem>
                            <NavButton onClick={() => props.setIsOpen(true)}>Add Game</NavButton>
                        </NavItem>
                        {
                            data.links.map((link, i) => {
                                return (
                                    <NavItem key={i}>
                                        <NavLink onClick={() => navigate(`/${link.toLowerCase()}`)}>
                                            {link}
                                            {
                                                link === 'Cart' ? <Counter>{cartNumber}</Counter> : ''
                                            }
                                            {
                                                link === 'Favourites' ? <Counter>{favouriteNumber}</Counter> : ''
                                            }
                                        </NavLink>
                                    </NavItem>
                                )
                            })
                        }
                    </NavList>
                </Nav>
                <MenuButton onClick={toggleNavigation}><MenuIcon></MenuIcon></MenuButton>
            </ContainerBetween>
        </Wrap>
    </HeaderBlock>
  )
}
