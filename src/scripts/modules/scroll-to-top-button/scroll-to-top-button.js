/**
 * ScrollToTopButton Class
 * Handles the instance of the button element that takes care of the scrolling back to top
 */
class ScrollToTopButton {
  // the instance of the document's element
  #documentEl;

  // the instance of the button's element
  #el;

  constructor(documentEl, buttonID) {
    // init the instance of the document element
    this.#documentEl = documentEl;

    // init the instance button element and subscribe to its clicks
    this.#el = document.getElementById(buttonID);
    this.#el.addEventListener('click', () => this.scrollToTop());

    // subscribe to the scroll and handle events
    document.addEventListener('scroll', () => this.#onScrollChanges());
  }

  /**
   * Triggers whenever the user scrolls on the page and determines if the button should be displayed
   * or hidden.
   */
  #onScrollChanges() {
    this.#el.style.display = this.#documentEl.scrollTop > 400 ? 'flex' : 'none';
  }

  /**
   * Scrolls the window back to the top of the app.
   */
  scrollToTop() {
    this.#documentEl.scrollTop = 0;
  }
}




/**
 * Module Exports
 */
export default ScrollToTopButton;
