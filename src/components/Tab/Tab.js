import React from 'react'
import { TabBlock } from './Tab.styled'

export default function Tab(props) {
    // const toggleActiveClass = (e) => {
    //     if(e.target.classList.contains('activeTab')) {
    //         e.target.classList.remove('activeTab')
    //     } else {
    //         e.target.classList.add('activeTab')
    //     }
    // }
  return (
    <TabBlock value={props.search} onClick={(e) => {
        e.preventDefault();
        // toggleActiveClass(e)
        // onElementClicked(e)
        props.setSearch(props.name)
    }}>
        {props.name}
    </TabBlock>
  )
}
