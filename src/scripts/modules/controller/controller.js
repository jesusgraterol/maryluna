import Sidenav from '../sidenav';

/**
 * Controller Class
 * ...
 */
class Controller {
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
    this.#sidenav = new Sidenav(this.#bodyEl);
  }
}




/**
 * Module Exports
 */
export default Controller;
