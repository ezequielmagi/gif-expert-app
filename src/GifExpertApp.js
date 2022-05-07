import React, { useState } from 'react'
import { AddCategories } from './components/AddCategories'

const GifExpertApp = () => {

  // const categories = ['x-men', 'goshtbusters']

  const [categories, setCategories] = useState(['x-men', 'goshtbusters', 'frutillitas'])

  // const handleAdd = () => {
  //   setCategories( [...categories, 'papo'] )
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategories setCategories={ setCategories } />
      <hr />
      <ul>
        {
          categories.map( categorie => {
            return <li key={categorie} > { categorie } </li>
          } )
        }
      </ul>
    </>
  )
}

export default GifExpertApp