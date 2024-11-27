import React from 'react'
import { getRandomRGB } from '../helpers/getRandomColor'
import { useState } from 'react'

export const ChangeBtn = ({ color, setColor }) => {

  const [counter, setCounter] = useState(0)

  return (
    <button className='changeBtn' style={{ color: color }} onClick={() => {
      let colorRandom = getRandomRGB();
      setColor(colorRandom);
      setCounter(counter + 1);
    }} onKeyUp={(e) => {
      if (e.key == "w") {
        setCounter(counter + 1)
      }

      if (e.key == "s") {
        if (counter > 0) {
          setCounter(counter - 1)
        }
      }

    }}>
      Change color {counter}
    </button>
  )
}
