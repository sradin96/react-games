import styled from 'styled-components';
import * as variable from '../styles/Variables.styled'
import {GameCard, GameImg, GameHolder, GameButtons, GameGenre, GameName, GameButton, GameLink} from '../Game/Game.styled';
import { ContainerBetween } from '../styles/Layout.styled';

export const HeroSliderBlock = styled.section`
    width: 100%;
    margin: 0 auto;
    height: 600px;
    position: relative;

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-wrapper {
        display: flex;
        height: 100%;
        width: fit-content;
    }

    .swiper-slide {
        position: relative;
    }

    .swiper-prev {
        left: 6%;
    }

    .swiper-next {
        right: 6%;
    }

    .swiper-pagination {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .swiper-pagination-bullet {
        width: 100px;
        height: 8px;
        border-radius: 4px;
        margin: 0 8px !important;
        display: block;
        background: ${variable.white} !important;
    }

    .swiper-pagination-bullet-active {
        background: ${variable.white} !important;
    }

    ${GameCard} {
        width: 100%;
        margin: 0;
        height: 100%;
    }

    ${GameLink} {
        height: 100%;
    }

    ${GameImg} {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    ${GameHolder} {
        position: absolute;
        justify-content: flex-start;
        z-index: 2;
        left: 5%;
        bottom: 5%;
        background-color: rgba(${variable.rgbBlue}, .6);
        border-radius: 12px;
        box-shadow: 4px 4px 30px rgba(${variable.rgbBlue}, 0.5);
        min-width: 200px;
        min-height: auto;
        backdrop-filter: blur(20px);
    }

    ${GameName} {
        color: ${variable.white};
        margin-bottom: 5px;
        text-align: left;
    }

    ${GameButtons} {
        display: none;
    }

    @media (max-width: 1024px) {
        height: 460px;

        .swiper-prev {
            left: 4.5%;
        }

        .swiper-next {
            right: 4.5%;
        }
    }
`

export const SwiperButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(${variable.rgbBlack}, .6);
    box-shadow: 4px 4px 30px rgba(${variable.rgbBlack}, 0.5);
`