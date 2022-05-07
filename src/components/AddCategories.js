import React, { useState } from 'react'

export const AddCategories = ( {setCategories} ) => {
  
  const [inputValue, setInputValue] = useState('')
  
  const handleChange = e => {
    setInputValue(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(inputValue.trim().length > 2){
      setCategories( cat => [...cat, inputValue] )
      setInputValue('')
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={inputValue}
        onChange={handleChange}
     />
    </form>
  )
}
