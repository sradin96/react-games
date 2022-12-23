import React from 'react'
import { Logo } from '../styles/Icons.styled'
import { Title } from '../styles/Typography.styled'
import { LoadingAnimation, LoadingAnimationBlock, LoadingBlock } from './Loading.styled'

export default function Loading() {
  return (
    <LoadingBlock>
        <Logo></Logo>
        <Title>Games</Title>
        <LoadingAnimationBlock>
            <LoadingAnimation></LoadingAnimation>
            <LoadingAnimation></LoadingAnimation>
            <LoadingAnimation></LoadingAnimation>
        </LoadingAnimationBlock>
    </LoadingBlock>
  )
}
