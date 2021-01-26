console.log('Welcome to my site! Dev + Design by Hanna Boorom')


// ** 1. CONNECT API AND MAKE FIRST CALL
// ** 2. TARGET CORRECT POKEMON
// ** 3. ASSIGN USER INPUT 

// const baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=151`


// CONNECTING API AND VERIFYING THAT INFO I WANT IS DISPLAYING IN CONSOLE
async function fetchOrigPokes(pokemonName) {
  const allPokemon = `https://pokeapi.co/api/v2/pokemon/`

  try {
    const response = await axios.get(`${allPokemon}${pokemonName}`)
    // console.log(response.data)

    let data = response.data
    showPokeData(data)
    console.log(showPokeData)

  } catch (error) {
    console.log(error)
  }
}
// fetchOrigPokes('pikachu')

const showPokeData = ((pokemon) => {
  const pokeInfo = `
  <div class= 'container'>
  <h1>Name: ${pokemon.name}</h1>
  <img src='${pokemon.sprites.front_default}' alt ='Pokemon Image' class='image'>
  <h2>Pokedex Number: ${pokemon.order}</h2>
   <h3>Type: ${pokemon.types[0].type.name}</h3>
    <p>Height: ${pokemon.height} dm</p>
    <p> Weight: ${pokemon.weight} hg</p>
  </div>
  `
    //** Append Pokemon Data to page
    let pokeContainer = document.querySelector('.results')
  pokeContainer.insertAdjacentHTML("beforeend", pokeInfo)
    return pokeInfo  
})




// ** Attach an event listener that simply logs the text value of the input...
const selectInput = document.querySelector('.search-section')
selectInput.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#search-bar').value
  // console.log(inputValue)
  fetchOrigPokes(inputValue)
})






