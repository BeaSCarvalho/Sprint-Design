const resultCards = document.getElementById("result-cards");

export let createCards = (data) => {
  resultCards.innerHTML = data
    .map((item) => {
      return `
      <section class="card">
        <p
          ${item.type
            .map((type) => 'class="poke-number ' + type + '"')
            .join("")}>
          ${item.num}  
        </p>
        <figure class="card-box">
          <img class="poke-img" src="${item.img}" alt=${item.name}>
        </figure>
        <main class="card-info">
          <h4 class="poke-title">
            ${item.name[0].toUpperCase() + item.name.substr(1)}
          </h4>
          <ul class="poke-items">
            ${item.type
              .map(
                (type) =>
                  '<li class="li-item-card ' + type + '">' + type + "</li>"
              )
              .join("")}
          </ul>
          <button type="button" class="button-modal open-modal">
            open
            <div class="container-icon">
              <img src="../../img/icon-open.png" alt="More information" class="small-icon">
            </div>
          </button>
        </main>
      </section>
      <section class="modal-container" data-modal="container">
        <div id="modal" class="modal">
          <button class="close" data-modal="close-modal">X</button>

          <p class="pokemon-number">${item.num}</p> 
          <p class="name-pokemon">
            ${item.name[0].toUpperCase() + item.name.substr(1)}
          </p>
          <img class="poke-img" src="${item.img}" alt=${item.name}>
          <p class="pokemon-about">${item.about}</p> 
          <p class="pokemon-rarity">${item["pokemon-rarity"]}</p>

          <h2 class="modal-titles">Type</h2> 
          <ul class="poke-items">
            ${item.type
              .map(
                (type) => '<li class="li-item ' + type + '">' + type + "</li>"
              )
              .join("")}
          </ul>
          <h2 class="modal-titles">Weaknesses</h2> 
          <ul class="poke-items">
            ${item.weaknesses
              .map(
                (type) => '<li class="li-item ' + type + '">' + type + "</li>"
              )
              .join("")}
          </ul>
          <h2 class="modal-titles">Resistant</h2> 
          <ul class="poke-items">
            ${item.type
              .map(
                (type) => '<li class="li-item ' + type + '">' + type + "</li>"
              )
              .join("")}
          </ul>


          <h2 class="modal-titles">Special Attack</h2> 
          <ul class="poke-items list-special-attack">
            <li>${item["special-attack"]}</li>
          </ul>

          <h2 class="modal-titles">Quick Moves</h2> 
          <ul class="poke-items list-quick-moves">
            <li>${item["quick-move"]}</li>
          </ul>

          <section class="evolutions">
            <h2 class="modal-titles">Evolution</h2>
            <div class="evolution">
              <p class="evolution">
                ${item.evolution["prev-evolution"]}
              </p>  
              <p class="evolution">
                ${item.evolution["prev-evolution"]}
              </p>
              <p class="evolution">
                ${item.evolution["prev-evolution"]}
              </p>
            </div>
          </section>
        </div>
      </section>
    `;
    })
    .join("");
};

function initModal() {
  let openModal = document.querySelectorAll(".open-modal");
  let closeModal = document.querySelectorAll(".close-modal");
  let containerModal = document.querySelectorAll(".modal-container");
  openModal.addEventListener("click", toogle);
  closeModal.addEventListener("click", toogle);
  containerModal.addEventListener("click", outside);
}

function toogle(e) {
  e.preventDefault();
  containerModal.classList.toggle("active-modal");
}

function outside(e) {
  if (e.target === this) {
    e.preventDefault();
    containerModal.classList.toggle("active-modal");
  }
}


const backColor = {
  water: '#6890F0',
  fire: '#F08030',
  grass: '#78C850',
  poison:'#A040A0',
  bug:'#729f3f',
  normal:'#a4acaf',
  flying:'#A890F0',
  fighting:'#C03028',
  electric:'#f8d030',
  ground:'#E0C068',
  psychic:'#F85888',
  rock:'#B8A038',
  ice:'#98D8D8',
  dragon: '#7038F8',
  ghost: '#705898',
  dark:'#705848',
  steel:'#B8B8D0',
  fairy:'#B8B8D0',
  
  }
  const containerList = document.getElementById("list")
  const pokemonModal = document.getElementById('miModal');
  
  let body = document.getElementsByTagName("body")[0];
  
  export let showData = function (pokemonArray) {
    containerList.innerHTML = ""
  
    pokemonArray.forEach( pokemon => {
      const item = document.createElement('li')
      item.className = 'pokemon '
      item.id = pokemon.num
      containerList.appendChild(item).innerHTML = `
           <span class="number-prefix ${pokemon.type[0]}">${pokemon.num}</span>
           <section class="imgCard">
             <figure id="pokemon-${pokemon.num}" class="card">
               <p class="name">${pokemon.name}</p>
               <img src="${pokemon.img}" class="imgPokemon">
             </figure>
           </section>
           <div class="type">${pokemon.type.map(type => '<span class="' + type + '">'+ type +'</span>').join('')}</div>
      `
      const pokemonButton = item.querySelector('[id="pokemon-'+pokemon.num+'"]')
  
      pokemonButton.addEventListener('click', () => {
  
        let prevEvolution = ''
        let nextEvolution = ''
        
        if (pokemon.evolution['prev-evolution']) {
          let evolutions = getPrevEvolution(pokemon.evolution['prev-evolution'])
  
          evolutions.forEach(evol => {  //NO ES UN BUCLE, ES UN METODO q ejecuta la función
            prevEvolution += `<div class="evolution-each-container">
              <img class="evolution-img" src="https://www.serebii.net/pokemongo/pokemon/${evol.num}.png">
              <p class="evolution-p">${evol.name}</p><p class="evolution-p">N° ${evol.num}</p>
            </div>`
          })
        } 
  
        if (pokemon.evolution['next-evolution']) {
          let evolutions = getNextEvolution(pokemon.evolution['next-evolution'])
  
          evolutions.forEach(evol => {
            nextEvolution += `
            <div class="evolution-each-container">
              <img class="evolution-img" src="https://www.serebii.net/pokemongo/pokemon/${evol.num}.png">
              <p class="evolution-p">${evol.name}</p><p class="evolution-p">N° ${evol.num}</p>
            </div>`
          })
        }
  
        let template = `
        <div class="modal-content">
        <span id="spanClose" class="close">x</span>
        
        <div class="rows">      
          <div class="modal_block1">
            <h1 class="txt-modal-title"><strong>${pokemon.name}</strong></h1>
            <img class="modal_block1 - img" src="${pokemon.img}">
            <p class="modal_block1-txt"> N° ${pokemon.num}</p>
            <p class="version-description">About: ${pokemon.about}</p>           
          </div>
          
          <section class="row-2">
            <section class="rows" id="rows">
              <p>Height:${pokemon.size.height}</p>
              <p>Weight: ${pokemon.size.weight} </p>
              <article class="sub-title">
                <article class="titleAttack" ><strong>QUIK MOVE: </strong></article>
                   ${pokemon['quick-move'].map(move => '<span class="typeAttack '+move.type+'"> '+move.name+' </span>').join('')}
              </article>
              <article class="sub-title">
                <article class="titleAttack" ><strong>SPECIAL ATTACK:</strong> </article>
                  ${pokemon['special-attack'].map(attack => '<span class="typeAttack '+attack.type+'"> '+attack.name+' </span>').join('')}
              </article>
            </section>
      
            <section class="rows">
            
              <section class="modal_block4">
                  <div class="resist-weak-ctn">
                    <h3 class="modal-h4"> TYPE</h3>
                    <div class="typeModal">
                      ${pokemon.type.map(type => '<img class="typeGeneral" src="./images/'+ type +'.png">').join('')}
                    </div>
                </div>
                <div class="resist-weak-ctn">
                  <h3 class="modal-h4">RESISTANCE</h3>
                  <div>
                    ${pokemon.resistant.map(type => '<img class="typeGeneral" src="./images/'+ type +'.png">').join('')}
                </div>
                </div>
              <div class="resist-weak-ctn">
                  <h3 class="modal-h4"> WEAKNESSES</h3>
                  <div>
                  ${pokemon.weaknesses.map(type => '<img class="typeGeneral" src="./images/'+ type +'.png">').join('')}
                  </div>
                </div>
              </section>
      
              <section class="modal_block4" id="column-M">
              <section class="evoluciones">
              <h3 class="modal-h3">EVOLUTION</h3>
                <div class="container-movements">
                  
                  ${(prevEvolution)?prevEvolution:''}
                  ${(nextEvolution)?nextEvolution:''}
                </div>
              </section>
              <section class="column">
                <h3 class="subtitle"> STATS </h3>
                <p> Max-Hp: ${pokemon.stats['max-hp']} </p>
                <p> Max-cp: ${pokemon.stats['max-cp']}</p>
                <p> Base-attack: ${pokemon.stats['base-attack']}</p>
                <p> Base-defense: ${pokemon.stats['base-defense']}</p>
                <p> Base-stamina: ${pokemon.stats['base-stamina']}</p>
              </section>
              
              </section>
            </section>
          </section>
      </div>
      <div class="rows" id="chartjs-radar">
            
      </div>
      <section class="row3" id="chartjs-radar" style="width: 400px; padding-left: 0; padding-right: 0; margin-left: auto; margin-right: auto;"><canvas id="canvas"></canvas></section>
      </div> `
  
        let colorType = backColor[pokemon.type[0]];
        let config = {
          type: 'radar',
          data: {
            labels: ['base-attack','base-defense','base-stamina','max-cp / 10','max-hp'],
            datasets: [{
              //label: 'Stats',
              borderColor: colorType,
              pointBackgroundColor: colorType,
              data: [pokemon.stats['base-attack'], pokemon.stats['base-defense'], pokemon.stats['base-stamina'], pokemon.stats['max-cp']/10, pokemon.stats['max-hp']]
            }
            ]
          },
          options: {
            legend: {
              display: false,
              position: 'left',
            },
            title: {
              display: true,
            },
            scale: {
              ticks: {
                beginAtZero: true
              }
            },
            tooltips:{
              enabled:true
            }
          }
        };
      
        pokemonModal.innerHTML  = template
        let span = pokemonModal.querySelector('[id="spanClose"]');
  
        pokemonModal.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
  
        
        span.onclick = function() {
          pokemonModal.style.display = "none";
          body.style.position = "inherit";
          body.style.height = "auto";
          body.style.overflow = "visible";
        }
  
      })
  
    })
  }
  
  function getNextEvolution(pokemon) {
    let evolutions =[];
    pokemon.forEach( evol => {
      let nextEvolution = evol['next-evolution'];
      //console.log("ReqNext2: ", nextEvolution)
      if(nextEvolution) {
        evolutions.push(...getNextEvolution(nextEvolution));
      }
      evolutions.push(evol);
    })
    
    return evolutions;
  }
  
  function getPrevEvolution(pokemon) {
    let prevEvolution = pokemon[0]['prev-evolution'];
    let evolutions =[];
    if(prevEvolution) {
      evolutions.push(...getPrevEvolution(prevEvolution));
    }
    evolutions.push(pokemon[0]);
    return evolutions;
  }
