import { useState } from 'react'
import './App.css'
import { PrimaryInput } from './components/Input/Primary'

const App = () => {
  const [email, setEmail] = useState("")

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(email)
    setEmail(event.currentTarget.value)
  }

  return (
    <>
      <PrimaryInput value={email} onChange={handleChange} name="email" />
    </>
  )
}

export default App
