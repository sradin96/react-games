import React, { useContext } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import FavouritesContext from '../FavouritesContext/FavouritesContext';
import Game from '../Game/Game';
import { HeroSliderBlock, SwiperButton } from './HeroSlider.styled';
import 'swiper/css/pagination';
import { ChevronL, ChevronR } from '../styles/Icons.styled';

export default function HeroSlider() {
    const favouriteGame = useContext(FavouritesContext);
    const swiper = useSwiper()

  return (
    <HeroSliderBlock>
        <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1.2}
            loop={true}
            autoplay= {{
                delay: 5000,
            }}
            centeredSlides={true}
            pagination={{
                clickable: true
              }}
            navigation={{
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            }}
        >
            <SwiperButton className="swiper-prev"><ChevronL></ChevronL></SwiperButton>
        {
            favouriteGame.favourites.slice(0, 3).map((game, i) => {
                return (
                    <SwiperSlide key={i}>
                        <Game
                        name={game.name}
                        image={game.image}
                        genre={game.genre}
                        />
                    </SwiperSlide>
                )
            })
        }
            <SwiperButton className="swiper-next"><ChevronR></ChevronR></SwiperButton>
        </Swiper>
    </HeroSliderBlock>
  )
}
