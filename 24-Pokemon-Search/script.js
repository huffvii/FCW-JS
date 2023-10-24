const resultContainer = document.getElementById('resultContainer');
let searchInput = document.getElementById('search-input');
const formForm = document.getElementById('formForm')
const searchButton = document.getElementById('search-button');
let pokemonDataArr = [];
let pokemonName = document.getElementById('pokemon-name');
let pokemonId = document.getElementById('pokemon-id');
let weight = document.getElementById('weight');
let height = document.getElementById('height')
let types = document.getElementById('types');
let hp = document.getElementById('hp');
let attack = document.getElementById('attack');
let defense = document.getElementById('defense');
let specialAttack = document.getElementById('special-attack');
let specialDefense = document.getElementById('special-defense');
let speed = document.getElementById('speed');
const spriteContainer = document.getElementById('sprite-container');




formForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let urlInput = searchInput.value.toLowerCase();

   fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${urlInput}`)
   .then(res => res.json())
   .then(data => {
     console.log(data)
     pokemonDataArr = data;
     catchEmAll(pokemonDataArr)
   })
   .catch((err) => {
     alert("Pokémon not found");
     resetPage()
   })
  
})


 const resetPage = () => {
  const sprite = document.getElementById('sprite');
  if(sprite) sprite.remove(); 

  pokemonName.textContent = '';
  pokemonId.textContent = '';
  types.textContent = '';
  height.textContent = '';
  weight.textContent = '';
  hp.textContent = '';
  attack.textContent = '';
  defense.textContent = '';
  specialAttack.textContent = '';
  specialDefense.textContent = '';
  speed.textContent = '';
  type.textContnet = '';
  pokemonTypes = '';
};

const catchEmAll = (pokemon) => {
  // let pokemonTypes =  pokemonDataArr.types
  //     .map(obj => `${obj.type.name.toUpperCase()}`).join('');

  spriteContainer.innerHTML = `<img id='sprite' src=${pokemonDataArr.sprites.front_default}>`;
  pokemonName.textContent = `${pokemonDataArr.name.toUpperCase()}`
  pokemonId.textContent = pokemonDataArr.id
  weight.textContent = pokemonDataArr.weight
  height.textContent = pokemonDataArr.height
  
  hp.textContent = pokemonDataArr.stats[0].base_stat
  attack.textContent = pokemonDataArr.stats[1].base_stat
  defense.textContent = pokemonDataArr.stats[2].base_stat
  specialAttack.textContent = pokemonDataArr.stats[3].base_stat
  specialDefense.textContent = pokemonDataArr.stats[4].base_stat
  speed.textContent = pokemonDataArr.stats[5].base_stat

  types.innerHTML = pokemonDataArr.types
      .map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`)
      .join('');
  
}


