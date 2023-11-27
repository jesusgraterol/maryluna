import Sidenav from './modules/sidenav';
import ScrollToTopButton from './modules/scroll-to-top-button';

/**
 * App Config
 * ...
 */
const CONFIG = {

};





/**
 * App Class
 * ...
 */
class App {
  // the instance of the document's element
  #documentEl;

  // the instance of the body's element
  #bodyEl;

  // the instance of the app container's element
  #appContainerEl;

  // the instance of the mobile sidenav
  #mobileSidenav;

  // the instance of the scroll to top button
  #scrollToTop;

  constructor(config) {
    // init the instance of the document's element
    this.#documentEl = document.documentElement;

    // init the instance of the body's element
    this.#bodyEl = document.body;

    // init the instance of the app's container element
    this.#appContainerEl = document.getElementById(config.appContainerID);

    // init the instance of the mobile sidenav
    this.#mobileSidenav = new Sidenav(this.#documentEl, this.#bodyEl, 'mobileSidenav');

    // init the instance of the scroll to top button
    this.#scrollToTop = new ScrollToTopButton(this.#documentEl, 'scrollToTopButton');
  }
}





/**
 * App Init
 * ...
 */
// eslint-disable-next-line no-unused-vars
const app = new App(CONFIG);
