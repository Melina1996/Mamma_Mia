import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { chose } from '../features/ingredientsSlice'

export default function Ingredients() {

    const dispatch = useDispatch()

    const myIngredients=[]

    console.log(myIngredients)

  return (
    <div className='flex-col flex gap-2'>

        <label htmlFor="">Tomatoes</label>
        <input type="checkbox" onChange={(e) => e.target.checked ?  myIngredients.push("Tomatoes") : myIngredients.splice(0,1)}></input>
        
        <label htmlFor="">Onions</label>
        <input type="checkbox"></input>

        <label htmlFor="">Cheese</label>
        <input type="checkbox"></input>

        <label htmlFor="">Paprika</label>
        <input type="checkbox"></input>

        {/* <button onClick={()=>}>DONE</button> */}

    </div>
  )
}
