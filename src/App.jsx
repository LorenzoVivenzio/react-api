import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [dati, setDati] = useState([])

  axios.get("https://lanciweb.github.io/demo/api/actresses/")
    .then((resp) => {
      setDati(resp.data.response)
    })

  return (
    <>
      
    </>
  )
}

export default App
