import Sidenav from './modules/sidenav';

/* const el = document.getElementById('appContainer');
document.body.style['overflow-y'] = 'hidden'; */
/* setTimeout(() => {
  document.body.style['overflow-y'] = 'scroll';
}, 3000) */
/**
 * App Config
 * ...
 */
const config = {

};





/**
 * App Class
 * ...
 */
class App {
  //
  #bodyEl;

  //
  #appContainerEl;

  //
  #sidenav;

  constructor(config) {
    // init the instance of the body's element
    this.#bodyEl = document.body;

    // init the instance of the app's container element
    this.#appContainerEl = document.getElementById(config.appContainerID);

    //
    this.#sidenav = new Sidenav(this.#bodyEl, 'mobileSidenav');
  }
}





/**
 * App Init
 * ...
 */
const app = new App(config);
