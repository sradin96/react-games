import styled from 'styled-components';
import {Gamejolt} from '@styled-icons/simple-icons/Gamejolt'
import {Search} from '@styled-icons/fluentui-system-filled/Search';
import {Heart} from '@styled-icons/boxicons-solid/Heart';
import {XCircle} from '@styled-icons/bootstrap/XCircle';
import {ChevronDown} from '@styled-icons/boxicons-regular/ChevronDown'
import {Cart} from '@styled-icons/boxicons-solid/Cart';
import {Xbox} from '@styled-icons/bootstrap/Xbox'
import {ChevronLeft} from '@styled-icons/entypo/ChevronLeft'
import {ChevronRight} from '@styled-icons/entypo/ChevronRight'
import {Robot} from '@styled-icons/fa-solid/Robot'
import {Menu} from '@styled-icons/entypo/Menu'
import * as variable from '../styles/Variables.styled'

export const Logo = styled(Gamejolt)`
    width: 50px;
    height: 50px;
    color: ${variable.orange};
`

export const SearchIcon = styled(Search)`
    width: 20px;
    height: 20px;
    color: ${variable.orange};
`

export const HeartIcon = styled(Heart)`
    width: 16px;
    height: 16px;
    color: ${variable.white};
    pointer-events: none;
`

export const ExitIcon = styled(XCircle)`
    width: 42px;
    height: 42px;
    color: ${variable.white};
`

export const Chevron = styled(ChevronDown)`
    width: 30px;
    height: 30px;
    color: ${variable.black};
`

export const CartIcon = styled(Cart)`
    width: 16px;
    height: 16px;
    color: ${variable.white};
    pointer-events: none;
`

export const XboxIcon = styled(Xbox)`
    width: 20px;
    height: 20px;
    color: ${variable.white};
`

export const ChevronL = styled(ChevronLeft)`
    width: 26px;
    height: 26px;
    color: ${variable.white};
`

export const ChevronR = styled(ChevronRight)`
    width: 26px;
    height: 26px;
    color: ${variable.white};
`

export const ChatBotIcon = styled(Robot)`
    width: 20px;
    height: 20px;
    color: ${variable.black};
`

export const MenuIcon = styled(Menu)`
    width: 40px;
    height: 40px;
    color: ${variable.white};
`