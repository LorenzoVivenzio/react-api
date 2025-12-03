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
    <header className="bg-dark">
      <h1 className="text-white  text-center p-3">Attori</h1>
    </header>
    <div className="container">
      
      <div className="row">
        {attori.map((attore, index) =>(
        <div key={index}
        className="col-4 mb-4">

          <div className="card bg-dark rounded-3 text-center">
            
            <h3 className="text-center m-3 text-white">{attore.name}</h3>
            <img className="p-3 rounded-3" src={attore.image} alt="" />
            <p className="text-danger">{attore.birth_year} <span className="text-warning">{attore.nationality}</span></p>
            <p className="p-3 text-white"><span className="text-info">Biography:</span>{attore.biography}</p>
            <p className="text-danger"></p>
            
          </div>

        </div>
        ))}

      </div>
    </div>
    </>
  )
}

export default App
