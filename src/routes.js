import { pageHome, initHome} from './pages/home/template-home.js';
import { pageFilters, initPageFilters} from './pages/filters/template-filters.js';
import { pageTips} from './pages/tips/template-tips.js';
import { pageCuriosities} from './pages/curiosities/template-curiosities.js';
import { createHeader, toggleMenu}  from './pages/components/header.js'

export function creatingInternalElements() {
  const container = document.getElementById('container-pokemon');
  const header = document.createElement('header');
  header.setAttribute('id', 'header');
  header.innerHTML = createHeader();
  container.append(header);

  const buttonMobile = container.querySelector("#button-mobile");
  buttonMobile.addEventListener("click", toggleMenu);
  buttonMobile.addEventListener("touchstart", toggleMenu);
}

function redirectPages() {
  const container = document.getElementById('container-pokemon');
  container.innerHTML = '';
  creatingInternalElements();
  switch (window.location.hash) {
    case '#home':
      container.append(pageHome());
      initHome();
      break;
    case '#contacts':
      container.append(pageHome());
      initHome();
      break;
    case '#filters':
      container.append(pageFilters());
      initPageFilters();
      break;
    case '#form-filters': 
      container.append(pageFilters());
      initPageFilters();
      break;   
    case '#tips-and-tricks':
      container.append(pageTips());
      break;
    case '#header-tips':
      container.append(pageTips());  
      break;  
    case '#curiosities':
      container.append(pageCuriosities());
      break;    
    case '#header-curiosities':
      container.append(pageCuriosities());
      break;
    default:
      container.append(pageHome());
      initHome();  
  }   
}

window.addEventListener('load', () => {
  redirectPages();
  window.addEventListener('hashchange', redirectPages);
});