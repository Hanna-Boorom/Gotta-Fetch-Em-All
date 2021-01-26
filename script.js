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
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}

// fetchOrigPokes('pikachu')


// ** Attach an event listener that simply logs the text value of the input...
const selectInput = document.querySelector('.search-section')
selectInput.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#search-bar').value
  // console.log(inputValue)
  fetchOrigPokes(inputValue)
})






