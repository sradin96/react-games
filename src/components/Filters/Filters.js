import React from 'react'
import { FiltersBlock } from './Filters.styled'
import data from './data.json'
import Tab from '../Tab/Tab'

export default function Filters(props) {
  return (
    <FiltersBlock>
        {
            data.genres.map((tab, i) => {
                return (
                    <Tab search={props.search} setSearch={props.setSearch} name={tab} key={i} />
                )
            })
        }
    </FiltersBlock>
  )
}
