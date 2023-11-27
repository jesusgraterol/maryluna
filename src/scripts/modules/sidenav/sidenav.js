/**
 * Sidenav Class
 * Handles the instance of an existing sidenav.
 */
class Sidenav {
  // the instance of the document's element
  #documentEl;

  // the instance of the body's element
  #bodyEl;

  // the instance of the sidenav's element
  #el;

  // the button and close button elements
  #openEl;

  #closeEl;

  // the state of the sidenav
  #isOpened = false;

  constructor(documentEl, bodyEl, sidenavID) {
    // init the instance of the document element
    this.#documentEl = documentEl;

    // init the body
    this.#bodyEl = bodyEl;

    // init the main el and subscribes to clicks within the parent
    this.#el = document.getElementById(sidenavID);
    this.#el.addEventListener('click', (e) => this.#onElementClick(e));

    // initialize the button instances
    this.#openEl = document.getElementById(`${sidenavID}Open`);
    this.#closeEl = document.getElementById(`${sidenavID}Close`);

    // subscribe to the click actions
    this.#openEl.addEventListener('click', () => this.open());
    this.#closeEl.addEventListener('click', () => this.close());

    // subscribe to keyboard actions and close the sidenav when escape is pressed
    this.#documentEl.addEventListener('keyup', (e) => this.#onKeyboardClickUp(e));
  }





  /* *********
   * Getters *
   ********* */

  get isOpened() {
    return this.#isOpened;
  }





  /* ******************************
   * ELEMENT/KEYBOARD CLICK EVENT *
   ****************************** */

  /**
   * Triggers whenever the sidenav element is clicked on and closes the sidenav if:
   * - the background is clicked
   * - a nav link is clicked
   * @param {*} e
   */
  #onElementClick(e) {
    if (
      e.target.id === this.#el.id
      || e.target instanceof HTMLAnchorElement
      || e.target.parentNode instanceof HTMLAnchorElement
    ) {
      this.close();
    }
  }

  /**
   * Triggers whenever a keyup event is emitted. The sidenav is closed if the escape key is pressed.
   * @param {*} e
   */
  #onKeyboardClickUp(e) {
    if (e.key === 'Escape') {
      this.close();
    }
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
