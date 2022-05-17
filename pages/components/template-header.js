export function createHeader() {
  const templateHeader = `
    <a href="#home" class="link-pokemon">
      <img class="logo-onpokemon" alt="Website logo OnPokemon" src="./img/icons/logo.png">
    </a>
    <section class="menu-header">
      <nav id="nav">
        <button class="button-mobile" id="button-mobile" aria-label="Open menu" aria-haspopup="true" aria-controls="menu" aria-expanded="false">
          <span class="icon"></span>
        </button>
        <ul class="menu" id="menu" role="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#filters">Filters</a></li>
          <li><a href="#tips-and-tricks">Tips & Trick</a></li>
          <li><a href="#curiosities">Curiosities</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </nav>
    </section>
  `;

  return templateHeader;
}
