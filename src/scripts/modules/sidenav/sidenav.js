/**
 * Sidenav Class
 * Handles the instance of an existing sidenav.
 */
class Sidenav {
  // the instance of the body's element
  #bodyEl;

  // the instance of the sidenav's element
  #el;

  // the button and close button elements
  #openEl;

  #closeEl;

  // the state of the sidenav
  #isOpened = false;

  constructor(bodyEl, sidenavID) {
    // init the body
    this.#bodyEl = bodyEl;

    // init the main el and subscribes to clicks within the parent
    this.#el = document.getElementById(sidenavID);
    this.#el.addEventListener('click', (e) => {
      // close if the background is clicked
      if (e.target.id === sidenavID) this.close();

      // close if a sidenav link has been clicked
    });

    // initialize the button instances
    this.#openEl = document.getElementById(`${sidenavID}Open`);
    this.#closeEl = document.getElementById(`${sidenavID}Close`);

    // subscribe to the click actions
    this.#openEl.addEventListener('click', () => this.open());
    this.#closeEl.addEventListener('click', () => this.close());

    // subscribe to keyboard actions and close the sidenav when escape is pressed
    document.addEventListener('keyup', (e) => { if (e.key === 'Escape') this.close(); });
  }

  /* *********
   * Getters *
   ********* */

  get isOpened() {
    return this.#isOpened;
  }




  /* *************
   * Controllers *
   ************* */

  /**
   * Opens the sidenav if it isn't already opened.
   */
  open() {
    if (!this.#isOpened) {
      this.#bodyEl.style['overflow-y'] = 'hidden';
      this.#el.style.display = 'flex';
      this.#isOpened = true;
    }
  }

  /**
   * Closed the sidenav in case it is opened.
   */
  close() {
    if (this.#isOpened) {
      this.#bodyEl.style['overflow-y'] = 'scroll';
      this.#el.style.display = 'none';
      this.#isOpened = false;
    }
  }
}




/**
 * Module Exports
 */
export default Sidenav;
