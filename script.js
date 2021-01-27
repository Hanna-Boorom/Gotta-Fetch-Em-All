console.log('Welcome to my site! Dev + Design by Hanna Boorom')


// ** 1. CONNECT API AND MAKE FIRST CALL
// ** 2. TARGET CORRECT POKEMON
// ** 3. ASSIGN USER INPUT 

// const baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=151`


// CONNECTING API AND VERIFYING THAT INFO I WANT IS DISPLAYING IN CONSOLE
async function fetchOrigPokes(pokemonName) {
  const allPokemon = `https://pokeapi.co/api/v2/pokemon/`
  const pokeDescr = `https://pokeapi.co/api/v2/pokemon-species/`

  try {
    const response = await axios.get(`${allPokemon}${pokemonName}`)
    // console.log(response.data)

    let data = response.data
    showPokeData(data)
    // console.log(showPokeData)

    const descriptions = await axios.get(`${pokeDescr}${pokemonName}`)
    let descriptionsData = descriptions.data
    showPokeDescription(descriptionsData)

  } catch (error) {
    alert(`Ooops! It looks like you didn't enter anything or what you entered was spelled incorrectly, try again!`)
  }
}
// fetchOrigPokes('pikachu')

const showPokeData = ((pokemon) => {
  const pokeInfo = `
  <div class= 'container'>
  <h1>Name: ${pokemon.name}</h1>
  <img src='${pokemon.sprites.front_default}' alt ='Pokemon Image' class='image'>
   <h2>Type: ${pokemon.types[0].type.name}</h2>
    <p>Height: ${pokemon.height} dm</p>
    <p> Weight: ${pokemon.weight} hg</p>
  </div>
  `


  //** Append Pokemon Data to page
  let pokeContainer = document.querySelector('.results')
  pokeContainer.insertAdjacentHTML("beforeend", pokeInfo)

  if (pokemon.types[0].type.name == 'fire') {
    pokeContainer.style.backgroundColor = "#ffb380"
  } else if (pokemon.types[0].type.name == 'electric') {
    pokeContainer.style.backgroundColor = "#ffe680"
  } else if (pokemon.types[0].type.name == 'grass') {
    pokeContainer.style.backgroundColor = "#bfff80"
  } else if (pokemon.types[0].type.name == 'bug') {
    pokeContainer.style.backgroundColor = "#d4d4aa"
  } else if (pokemon.types[0].type.name == 'water') {
    pokeContainer.style.backgroundColor = "#cce0ff"
  } else if (pokemon.types[0].type.name == 'dragon') {
    pokeContainer.style.backgroundColor = "#b3b3cc"
  } else if (pokemon.types[0].type.name == 'fighting') {
    pokeContainer.style.backgroundColor = "#df9f9f"
  } else if (pokemon.types[0].type.name == 'ghost') {
    pokeContainer.style.backgroundColor = "#9494b8"
  } else if (pokemon.types[0].type.name == 'ground') {
    pokeContainer.style.backgroundColor = "#dfbf9f"
  } else if (pokemon.types[0].type.name == 'ice') {
    pokeContainer.style.backgroundColor = "#ccffff"
  } else if (pokemon.types[0].type.name == 'normal') {
    pokeContainer.style.backgroundColor = "#ffd480"
  } else if (pokemon.types[0].type.name == 'poison') {
    pokeContainer.style.backgroundColor = "#e0b3ff"
  } else if (pokemon.types[0].type.name == 'psychic') {
    pokeContainer.style.backgroundColor = "#e699cc"
  } else if (pokemon.types[0].type.name == 'rock') {
    pokeContainer.style.backgroundColor = "#cc9966"
  } else {
    pokeContainer.style.backgroundColor = "white"
  }

  const capitalize = document.querySelector('.container')
  capitalize.style.textTransform = 'capitalize'

  // ** CLEAR OUT SEARCH BAR AFTER MAKING A SEARCH
  const form = document.querySelector('form')
  form.reset()

  return pokeInfo
})


const showPokeDescription = ((pokemon) => {
  const pokeFlavorText = `
  <p class= 'description'>${pokemon.flavor_text_entries[1].flavor_text}</p>
  `

  let pokeDescContainer = document.querySelector('.results')
  pokeDescContainer.insertAdjacentHTML("beforeend", pokeFlavorText)
  return pokeFlavorText
})




// ** Attach an event listener that simply logs the text value of the input...
const selectInput = document.querySelector('.search-section')
selectInput.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#search-bar').value
  // console.log(inputValue)

  removePokes()
  fetchOrigPokes(inputValue)
})



// ** REMOVE ENTRY FROM PAGE WHEN A NEW POKEMON IS SEARCHED...
const removePokes = () => {
  const imageDiv = document.querySelector('.results')
  while (imageDiv.lastChild) {
    imageDiv.removeChild(imageDiv.lastChild)
  }
}








