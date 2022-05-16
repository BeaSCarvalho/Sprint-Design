import { creatingInternalElements } from './pages/components/header.js';
import { pageHome } from './pages/home/template-home.js';
import { pageFilters } from './pages/filters/template-filters.js';
import { pageTips} from './pages/tips/template-tips.js';
import { pageCuriosities} from './pages/curiosities/template-curiosities.js';
import { initPageHome } from './pages/home/home.js';
import { initPageFilters } from './pages/filters/filters.js';

function redirectPages() {
  const container = document.getElementById('container-pokemon');
  container.innerHTML = '';
  creatingInternalElements();
  switch (window.location.hash) {
    case '#home':
      container.append(pageHome());
      initPageHome();
      break;
    case '#contacts':
      container.append(pageHome());
      initPageHome();
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
      initPageHome();  
  }   
}

window.addEventListener('load', () => {
  redirectPages();
  window.addEventListener('hashchange', redirectPages);
});