import pageHome from './pages/home/template-home.js';
import pageFilters from './pages/filters/template-filters.js';
import pageTips from './pages/tips/template-tips.js';
import pageCuriosities from './pages/curiosities/template-curiosities.js';

const main = document.querySelector('#root');

function redirect() {
  switch (window.location.hash) {
    case '':
      main.appendChild(pageHome());
      break;
    case '#home':
      main.appendChild(pageHome());
      break;
    case '#filters':
      main.appendChild(pageFilters());
      break;
    case '#form-filters': 
      main.appendChild(pageFilters());
      break;   
    case '#tips':
      main.appendChild(pageTips());
      break;
    case '#container-article':
      main.appendChild(pageTips());  
      break;  
    case '#curiosities':
      main.appendChild(pageCuriosities());
      break;    
    case '#back-up':
      main.appendChild(pageCuriosities());
    default:
      main.appendChild(pageHome());  
  }   
}

window.addEventListener('hashchange', () => {
  main.innerHTML = '';
  redirect();
});

window.addEventListener('load', () => {
  redirect();
});  