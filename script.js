// background.js
chrome.runtime.onMessage.addListener(message => {
  console.log("background: onMessage", message);

  // Add this line:
  return Promise.resolve("Dummy response to keep the console quiet");
});

console.log('Welcome to my site! Dev + Design by Hanna Boorom')


// ** 1. CONNECT API AND MAKE FIRST CALL
// ** 2. TARGET CORRECT POKEMON
// ** 3. ASSIGN USER INPUT 


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


  //** Append Pokemon Data to page
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

  // ** CHANGE BACKGROUND COLOR BASED ON TYPE
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
  
  let lowerCaseValue = inputValue.toLowerCase()
  // console.log(inputValue)

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











