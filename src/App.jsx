import { useEffect, useState } from 'react'
import { Main } from './components/Main'
import { Input } from './components/Input'
import { ChangeBtn } from './components/ChangeBtn'
import './App.css'

function App() {


  const [color, setColor] = useState(null);

  return (

      <Main color={color} >
        <ChangeBtn color={color} setColor={setColor} />
        <Input color={color} setColor={setColor} />
      </Main>
  )
}

export default App
