// ** 1. CONNECT API AND MAKE FIRST CALL
// ** 2. TARGET CORRECT POKEMON
// ** 3. ASSIGN USER INPUT 

// const baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=151`



async function fetchOrigPokes(pokemonName) {
  const allPokemon = `https://pokeapi.co/api/v2/pokemon/`

  try {
    const response = await axios.get(`${allPokemon}${pokemonName}`)
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}

fetchOrigPokes('pikachu')




