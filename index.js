let img = null; /*variable de alcance local */
let li_data = document.querySelector('.li-data') 
fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
  .then(response => response.json())
  .then(response => {
    datos = response;
    response.results.forEach(
      responseData => {
        let parent = document.createElement("option")
        parent.innerHTML = responseData.name;
        parent.setAttribute("img-pokemon",responseData.url)

        li_data.append(parent)

      }
    
)})

const selectElement = document.querySelector('.li-data');

selectElement.addEventListener('change', (event) => {
  const resultado = document.querySelector('.resultado');
  let imgpokemon = datos.results.filter(img => img.name === event.target.value)[0]
  fetch(imgpokemon.url).then(response => response.json()).then(response => {
    resultado.innerHTML = `   
    Seleccionaste a: ${event.target.value}
    <img src='${response.sprites.front_default}'/>
`;

  })


});
