import React, { Component } from 'react'
import { Wrap } from '../styles/Layout.styled'
import { Copyright, FooterBlock, FooterItem, FooterLink, FooterList, FooterText, FooterTextHolder } from './Footer.styled'
import data from './data.json'

export default function Footer() {
  return (
    <FooterBlock>
        <Wrap>
            <FooterList>
                {
                    data.socials.map((social, i) => {
                        return (<FooterItem key={i}>
                            <FooterLink>
                                {social}
                            </FooterLink>
                        </FooterItem>
                        )
                    })
                }
            </FooterList>
            <FooterTextHolder>
                <FooterText>All Games, One Website</FooterText>
            </FooterTextHolder>
            <FooterList>
                {
                    data.links.map((link, i) => {
                        return (
                            <FooterItem key={i}>
                                <FooterLink>{link}</FooterLink>
                            </FooterItem>
                        )
                    })
                }
            </FooterList>
            <FooterList>
            {
                    data.settings.map((setting, i) => {
                        return (
                            <FooterItem key={i}>
                                <FooterLink>{setting}</FooterLink>
                            </FooterItem>
                        )
                    })
                }
            </FooterList>
            <Copyright>
                <FooterText>
                    ©2022 GAMES ALL RIGHTS RESERVED.
                    <br />
                    All trademarks referenced herein are the properties of their respective owners.
                </FooterText>
            </Copyright>
        </Wrap>
    </FooterBlock>
  )
}
