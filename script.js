console.log('Welcome to my site! Dev + Design by Hanna Boorom')


// CONNECTING API WITH ASYNC FUNCTION
async function fetchOrigPokes(pokemonName) {
  const allPokemon = `https://pokeapi.co/api/v2/pokemon/`
  const pokeDescr = `https://pokeapi.co/api/v2/pokemon-species/`

  try {
    const response = await axios.get(`${allPokemon}${pokemonName}`)

    let data = response.data
    showPokeData(data) 

  // USED 2 DIFFERENT GET REQUESTS FOR 2 DIFFERENT END POINTS
    const descriptions = await axios.get(`${pokeDescr}${pokemonName}`)
    let descriptionsData = descriptions.data
    showPokeDescription(descriptionsData)

  } catch (error) {
    alert(`Ooops! It looks like you didn't enter anything or what you entered was spelled incorrectly, try again!`)
  }
}

// TARGET THE INFO FOR EACH POKEMON AND CREATE THE HTML
const showPokeData = ((pokemon) => {
  const pokeInfo = `
  <div class= 'container'>
  <h2>Name: ${pokemon.name}</h2>
  <img src='${pokemon.sprites.front_default}' alt ='Pokemon Image' class='image'>
   <h3>Primary Type: ${pokemon.types[0].type.name}</h3>
    <p class="height">Height: ${pokemon.height} dm</p>
    <p class="weight"> Weight: ${pokemon.weight} hg</p>
  </div>
  `


  //** APPEND POKEMON DATA TO THE PAGE
  let pokeContainer = document.querySelector('.results')
  pokeContainer.insertAdjacentHTML("beforeend", pokeInfo)



  // ** IF A POKEMON HAS MORE THAN ONE TYPE, SHOW ON PAGE
  if (pokemon.types.length === 2) {
    let pokeType2 = pokemon.types[1].type.name
    let resultsContainer = document.querySelector('.container')
    resultsContainer.insertAdjacentHTML('afterbegin', `<h3 class="type2">Secondary Type: ${pokeType2}</h3>`)
  } else {
    pokeType2 = null;
  }


  // ** STYLING THAT ONLY SHOWS UP WHEN THE CONTENT LOADS
  pokeContainer.style.border = "thin solid black"


  // ** CHANGE BACKGROUND COLOR BASED ON PRIMARY TYPE
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
  } else if (pokemon.types[0].type.name == 'fairy') {
    pokeContainer.style.backgroundColor = "#f7c8f0"
  } else if (pokemon.types[0].type.name == 'steel') {
    pokeContainer.style.backgroundColor = "#a7a8a8"
  } else {
    pokeContainer.style.backgroundColor = "white"
  }
  
  
// CAPITALIZING EACH WORD IN THE CONTAINER
  const capitalize = document.querySelector('.container')
  capitalize.style.textTransform = 'capitalize'


  // ** CLEAR OUT SEARCH BAR AFTER MAKING A SEARCH
  const form = document.querySelector('form')
  form.reset()

  return pokeInfo
})

// ACCESSING THE 2ND AXIOS CALL TO GET THE DESCRIPTION DATA
const showPokeDescription = ((pokemon) => {
  const pokeFlavorText = `
  <p class= 'description'>${pokemon.flavor_text_entries[1].flavor_text}</p>
  `

  let pokeDescContainer = document.querySelector('.results')
  pokeDescContainer.insertAdjacentHTML("beforeend", pokeFlavorText)
  return pokeFlavorText
})




// ** GRABBING THE TEXT VALUE OF THE USER'S INPUT
const selectInput = document.querySelector('.search-section')
selectInput.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#search-bar').value

// CHANGING USER'S INPUT TO ALL LOWERCASE SO UPPERCASE VALUES DON'T BREAK THE CODE
  let lowerCaseValue = inputValue.toLowerCase()

// CALLING THE REMOVE FUNCTION
  removePokes()
  fetchOrigPokes(lowerCaseValue)
})



// ** REMOVE ENTRY FROM PAGE WHEN A NEW POKEMON IS SEARCHED...
const removePokes = () => {
  const imageDiv = document.querySelector('.results')
  while (imageDiv.lastChild) {
    imageDiv.removeChild(imageDiv.lastChild)
  }
}











