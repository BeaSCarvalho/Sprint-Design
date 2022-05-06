import header from '../../components/header.js';

export default function pageCuriosities(){
  const container = document.createElement("div");
  container.setAttribute("id","container-pokemon");

  const templateCuriosities = `
    <main id="container-article">
      <h1 class="main-title" id="back-up"> Curiosities </h1>
      <section class="section-text">
        <p class="paragraph-article">
          Since it launched in the 90's, Pokémon has gone on to become one of the most popular franchises in the world!
          From games and card to movies and TV shows, there's nothing that Pokémon hasn't conquered! With nearly 1,000
          different Pokémon, the Pokémon universe has endless discoveries to be made! Here are 20 of the weirdest and most
          wonderful facts about Pokémon, its creators, and of course the Pokémon themselves!
          <br> <br>
          Which of these amazing Pokémon
          facts is your favourite?
        </p>
      </section>

      <section class="wrapper">
        <article class="article">
          <h2 class="sub-title">1. The first Pokémon ever designed </h2>
          <img class="img-articles" src="https://img.redbull.com/images/c_fill,g_auto,w_1040,h_693/q_auto,f_auto/redbullcom/2017/09/13/f5abb4bc-79a4-4d8a-9f99-d094ed7eb4ab/rhydon-in-early-concept-designs.jpg">
          <p class="paragraph-article">
            It may be entry #112 in the Pokédex, but according to Ken Sugimori – the primary designer for the Pokémon
            games – Rhydon was the first Pokémon ever created. This is also the reason why sprites of Rhydon were so
            widespread in the original games. In that same interview, Sugimori mentions Lapras and Clefairy as some of
            the other earliest Pokémon designs to join Rhydon.
          </p>
        </article>

        <article class="article">
          <h2 class="sub-title">2. Pokémon doesn't have a plural </h2>
          <img class="img-articles" src="https://i.pinimg.com/originals/54/bc/bc/54bcbcd0ea744587f30df0fea3bf354b.gif">
          <p class="paragraph-article">What does Pokemon mean? The name Pokémon comes from the word combination of the original Japanese title:
            <strong>"Pocket Monsters"</strong> - which also explains why the term "pokémon" has no plural.
          </p>
        </article>

        <article class="article">
          <h2 class="sub-title"> 3. Slowbro Is The Only Pokemon That Can Devolve</h2>
          <img class="img-articles" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/Slowpoke-and-Slowbro-Pokemon.jpg?q=50&fit=crop&w=740&dpr=1.5">
          <p class="paragraph-article">
            According to the sometimes less-than-reliable Pokedex entries, Slowbro is unique in its ability to return to
            its previous evolution Slowpoke. The creature initially evolves when a Shellder latches on to Slowpoke's
            tail, and it seems like the process is reversed if the shell Pokemon ever lets go.
          </p>
        </article>

        <article class="article">
          <h2 class="sub-title">4. The gender of a Pikachu can be determined by its tail. </h2>
          <p class="paragraph-article">
            If the end of its tail is long and flat, it means that it is a male. The tail of the female species is shaped
            like a heart at its tip. However, when they evolve into Raichu, their tails look more similar to each other.
          </p>
        </article>

        <article class="article">
          <h2 class="sub-title"> 5. Lots of Pokémon names are puns</h2>
          <p class="paragraph-article">
            For example, the powers of Mimikyu are literally to 'mimic you'. And Sudowoodo? 'Psudo wood', or fake wood.
            Squirtle is a reference to the fact that he's a turtle who can squirt water, and Charmander is so -called
            because it's a fire Pokémon which can 'char' you. Which other clever names can you spot?
          </p>
        </article>

        <article class="article">
          <h2 class="sub-title"> 6. The 'Gotta Catch 'Em All' ethos has a back story</h2>
          <img class="img-articles" src="https://i.pinimg.com/564x/77/fb/5b/77fb5b6fa2b4fb6f81d71984bd98dfff.jpg">
          <p class="paragraph-article">
            Satoshi's idea about collecting animals in Pokémon came from his love of being in the garden as a child. As a
            boy, he would spend hours finding and collecting bugs and insects. In fact he spent so much time doing it,
            his friends called him 'Dr. Bug', and he originally wanted to become a bug scientist - or entomologist, to
            give it its proper name. We're glad he decided to work in video games instead!
          </p>
        </article>

        <article class="article">
          <h2 class="sub-title"> 7. The colours of the Pokeballs are actually based on Cambell's soup cans </h2>
          <img class="img-articles" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cans-of-campbells-soup-sit-on-a-shelf-in-a-grocery-store-on-news-photo-1046599136-1542810801.jpg">
          <p class="paragraph-article">
            Yes, you read right, the famous pokeball is actually meant to mimic the look of a soup can! Specifically,
            the tomato soup cans that appear in Andy Warhol's famous picture. We're not sure why the design was
            based on a soup can, but once you see it, you can't unsee.
          </p>
        </article>

        <article class="article">
          <h2 class="sub-title"> 8. Ash's Pokémon was originally meant to be a Clefairy, not Pikachu! </h2>
          <p class="paragraph-article">
            It's hard to imagine anyone else as Ash's best pal, but the original plan was to make it a Clefairy! It's
            easy to see why, like Pikachu Clefairies are cute, small and portable, but 'Detective Clefairy' just doesn't
            have the same ring to it.
          </p>
        </article>

        <article class="article">
          <h2 class="sub-title"> 9. Over 88 billion Pokémon have been caught on Pokémon Go </h2>
          <img class="img-articles" src="https://www.beano.com/wp-content/uploads/2021/03/8-19.png?w=977&strip=all&quality=85">
          <p class="paragraph-article">
            That's a lot of Pokémon! Between millions of different people of course - no one person has caught that many!
            In fact, it's basically impossible to 'Catch 'Em All' since some Pokémon don't actually appear in the game,
            especially some of the rarer or older ones. It's fun trying to find them though!
          </p>
        </article>
        <a href="#back-up">
          <button type="button" id="back-button" class="btn-action">
            <img src="./img/icon-up-arrow.png" alt="Back to top">
          </button>
  `;

  container.appendChild(header());
  container.innerHTML += templateCuriosities;

  const buttonMobile = container.querySelector("#button-mobile");
  buttonMobile.addEventListener("click", toggleMenu);
  buttonMobile.addEventListener("touchstart", toggleMenu);

  function toggleMenu(event) {
    if (event.type === "touchstart") {
      event.preventDefault();
    }
    const navigation = document.getElementById("nav");
    navigation.classList.toggle("active");
    const navActive = navigation.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", navActive);
    if (navActive) {
      event.currentTarget.setAttribute("aria-laberl", "Close Menu");
    } else {
      event.currentTarget.setAttribute("aria-laberl", "Open Menu");
    }
  }

  return container;
}