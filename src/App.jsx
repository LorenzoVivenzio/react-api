import axios from "axios"
import { useEffect, useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.css"


function App() {
  const [attori, setAttori] = useState([])

  useEffect(() => {
    fecthAttori()
  }, [])


  function fecthAttori() {
    axios
      .get("https://lanciweb.github.io/demo/api/actors/")
      .then((resp) => {
        setAttori(resp.data)
      })
  }


  return (
    <>
    <div className="container">
      <h1 className="text-center mt-3">Attori</h1>
      <div className="row">
        {attori.map((attore) =>(
        <div className="col-4">
          <div className="card">
            <h3 className="text-center">{attore.name}</h3>
            <img src={attore.image} alt="" />
            <p className="p-3">biography: {attore.biography}</p>
          </div>
        </div>
        ))}

      </div>
    </div>
    </>
  )
}

export default App
