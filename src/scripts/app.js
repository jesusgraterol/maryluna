import Sidenav from './modules/sidenav';
import Dialog from './modules/dialog';
import ScrollToTopButton from './modules/scroll-to-top-button';
import CompanyServices from './modules/company-services';

/**
 * App Class
 * The entry point of the application that instantiates all the essential modules.
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

  // the instance of the dialog
  #dialog;

  // the instance of the scroll to top button
  #scrollToTop;

  // the instance of the company services
  #companyServices;

  constructor() {
    // init the instance of the document's element
    this.#documentEl = document.documentElement;

    // init the instance of the body's element
    this.#bodyEl = document.body;

    // init the instance of the app's container element
    this.#appContainerEl = document.getElementById('appContainer');

    // init the instance of the mobile sidenav
    this.#mobileSidenav = new Sidenav(this.#documentEl, this.#bodyEl, 'mobileSidenav');

    // init the instance of the dialog
    this.#dialog = new Dialog(this.#bodyEl, 'dialog');

    // init the instance of the scroll to top button
    this.#scrollToTop = new ScrollToTopButton(this.#documentEl, 'scrollToTopButton');

    // init the instance of the company services
    this.#companyServices = new CompanyServices(this.#dialog, 'services', 'data-dialog-id');
  }
}





/**
 * App Init
 * The app is initialized once it has been fully instantiated.
 */
// eslint-disable-next-line no-unused-vars
const app = new App();
