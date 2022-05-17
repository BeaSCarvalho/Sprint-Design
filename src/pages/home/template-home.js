export function pageHome() {
  const container = document.createElement("div");
  container.setAttribute("id", "container-pokemon");
  container.innerHTML = `
<main>
  <section id="background">
    <div class="box">
      <div class="box-image"><img src="img/carousel-and-background/carousel-one.png" class="img-carousel"/></div>
      <div class="box-image"><img src="img/carousel-and-background/carousel-two.png" class="img-carousel"/></div>
      <div class="box-image"><img src="img/carousel-and-background/carousel-three.png" class="img-carousel" /></div>
    </div>
  <section class="box-cursor"></section>
</main>

<footer id="contacts">
  <nav class="about-us">
    <h2 class="title-about">ABOUT US</h2>
    <div class="container-contacts">
      <address class="about-contact cont1">
        <p class="name">Adriana Watanabe</p>
        <a href="https://github.com/adrianatwatanabe" class="git">
          <img src="./img/icons/icon-github.png" alt="logo github" class="icon-git" />
          <p class="link-git">github.com/adrianatwatanabe</p>
        </a>
      </address>

      <address class="about-contact cont2">
        <p class="name">Ana Clara Freitas</p>
        <a href="https://github.com/AnaClaraFreitas" class="git">
          <img src="./img/icons/icon-github.png" alt="logo github" class="icon-git" />
          <p class="link-git">github.com/AnaClaraFreitas</p>
        </a>
      </address>

      <address class="about-contact cont3">
        <p class="name">Beatriz Carvalho</p>
        <a href="https://github.com/BeaSCarvalho" class="git"><br />
          <img src="./img/icons/icon-github.png" alt="logo github" class="icon-git" />
          <p class="link-git">github.com/BeaSCarvalho</p>
        </a>
      </address>

      <address class="about-contact cont4">
        <p class="name">Érika Krause</p>
        <a href="https://github.com/erikakrause" class="git">
          <img src="./img/icons/icon-github.png" alt="logo github" class="icon-git" />
          <p class="link-git">github.com/erikakrause</p>
        </a>
      </address>

      <address class="about-contact cont5">
        <p class="name">Helena Gonçalves</p>
        <a href=" https://github.com/nannayusuf" class="git">
          <img src="./img/icons/icon-github.png" alt="logo github" class="icon-git" />
          <p class="link-git">github.com/nannayusuf</p>
        </a>
      </address>

      <address class="about-contact cont6">
        <p class="name">Marione Pereira</p>
        <a href=" https://github.com/Marione-Tainara" class="git">
          <img src="./img/icons/icon-github.png" alt="logo github" class="icon-git" />
          <p class="link-git">github.com/Marione-Tainara</p>
        </a>
      </address>
  </nav>
  <a href="index.html#header-filters">
    <button type="button" id="back-button-home" class="btn-action">
      <img src="./img/icons/icon-up-arrow.png" alt="Back to top">
    </button>
  </a>
</footer>

  `;
  return container;
}
