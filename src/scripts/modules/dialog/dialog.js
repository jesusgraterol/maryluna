/**
 * Dialog Class
 * Handles the dialog instances within the website.
 */
class Dialog {
  // the instance of the body's element
  #bodyEl;

  // the instance of the dialog element as well as its contents
  #el;

  #titleEl;

  #closeEl;

  #contentEl;

  constructor(bodyEl, elementID) {
    // init the body's element
    this.#bodyEl = bodyEl;

    // init the dialog element and its contents
    this.#el = document.getElementById(elementID);
    this.#titleEl = document.getElementById(`${elementID}Title`);
    this.#closeEl = document.getElementById(`${elementID}Close`);
    this.#contentEl = document.getElementById(`${elementID}Content`);

    // Subscribe to the close button clicks
    this.#closeEl.addEventListener('click', () => this.close());

    // Subscribe to the open & close actions
    this.#el.addEventListener('close', () => this.#onDialogClose());
  }

  /**
   * Builds and displays the modal based on the given content.
   * @param {*} title
   * @param {*} htmlContent
   */
  show(title, htmlContent) {
    this.#bodyEl.style['overflow-y'] = 'hidden';
    this.#titleEl.innerText = title;
    this.#contentEl.innerHTML = htmlContent;
    this.#el.showModal();
  }

  /**
   * Resets the content and closes the dialog.
   */
  close() {
    this.#el.close();
    this.#titleEl.innerText = '';
    this.#contentEl.innerHTML = '';
  }

  /**
   * Triggers whenever the dialog is closed. Takes care of renabling the scrolling functionality to
   * the body
   */
  #onDialogClose() {
    this.#bodyEl.style['overflow-y'] = 'scroll';
  }
}




/**
 * Module Exports
 */
export default Dialog;
