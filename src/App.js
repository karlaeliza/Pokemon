import { useEffect, useState } from "react";

function App() {

  const [allPokemons, setAllPokemons] = useState([])
  const [laodMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
  
  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data =await res.json()

    setLoadMore(data.next)
   
    function craetePokemonObject (result) {
result.forEach( async (pokemon) => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/${pokemon.name}")
  const data =await  res.json()

 setAllPokemons(currentlist => [...currentlist,data])

 await console.log (allPokemons)
})
    }
    craetePokemonObject(data.result)
  }
  
  useEffect(() => {
    getAllPokemons()
  },[])
  return (

    <div className="App-container">
     <h1>pokemon evolution</h1>
     <div className="pokemon-container">
      <div className="all-container">

      </div>
      <button className="load-more">Load more</button>
     </div>
    </div>
  );
}

export default App;
