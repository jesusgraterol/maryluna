/**
 * Company Services Class
 * Handles the actions that can be performed in the services section. Including the display of
 * informational dialogs.
 */
class CompanyServices {
  // the instance of the dialog class
  #dialog;

  // the instance of the container's element
  #el;

  // the name of the attribute used to identify what dialogs to display
  #dataDialogAttributeName;

  constructor(dialog, servicesContainerID, dataDialogAttributeName) {
    // init the dialog instance
    this.#dialog = dialog;

    // init the main el and subscribes to clicks within the parent
    this.#el = document.getElementById(servicesContainerID);
    this.#el.addEventListener('click', (e) => this.#onContainerElementClick(e));

    // init the attribute name for the dialog ids
    this.#dataDialogAttributeName = dataDialogAttributeName;
  }




  /* *****************
   * DIALOG HANDLERS *
   ***************** */

  /**
   * Triggers when the "More info" button in a service card is clicked. Identifies which button
   * was clicked and displays the appropriate dialog.
   * @param {*} e
   */
  #onContainerElementClick(e) {
    // extract the data dialog attribute
    const dataDialog = e.target.getAttribute(this.#dataDialogAttributeName);

    // proceed only if a truthy value that matches an actual dialog was extracted
    if (dataDialog === 'lessons') {
      this.#displayLessonsDialog();
    } else if (dataDialog === 'rent') {
      this.#displayRentDialog();
    } else if (dataDialog === 'accomodation') {
      this.#displayAccomodationDialog();
    }
  }

  // Lessons Dialog
  #displayLessonsDialog() {
    this.#dialog.show('Clases de Kiteboarding', `
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet quidem debitis ad dolorum? Ipsum non pariatur maiores. Quod nobis aliquid aspernatur odit repudiandae omnis ab eius ut vel impedit?
      </p>
    `);
  }

  // Rent Dialog
  #displayRentDialog() {
    this.#dialog.show('Alquiler de Equipos', `
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet quidem debitis ad dolorum? Ipsum non pariatur maiores. Quod nobis aliquid aspernatur odit repudiandae omnis ab eius ut vel impedit?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet quidem debitis ad dolorum? Ipsum non pariatur maiores. Quod nobis aliquid aspernatur odit repudiandae omnis ab eius ut vel impedit?
      </p>
    `);
  }

  // Accomodation Dialog
  #displayAccomodationDialog() {
    this.#dialog.show('Estadía', `
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet quidem debitis ad dolorum? Ipsum non pariatur maiores. Quod nobis aliquid aspernatur odit repudiandae omnis ab eius ut vel impedit?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet quidem debitis ad dolorum? Ipsum non pariatur maiores. Quod nobis aliquid aspernatur odit repudiandae omnis ab eius ut vel impedit?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet quidem debitis ad dolorum? Ipsum non pariatur maiores. Quod nobis aliquid aspernatur odit repudiandae omnis ab eius ut vel impedit?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet quidem debitis ad dolorum? Ipsum non pariatur maiores. Quod nobis aliquid aspernatur odit repudiandae omnis ab eius ut vel impedit?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet quidem debitis ad dolorum? Ipsum non pariatur maiores. Quod nobis aliquid aspernatur odit repudiandae omnis ab eius ut vel impedit?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet quidem debitis ad dolorum? Ipsum non pariatur maiores. Quod nobis aliquid aspernatur odit repudiandae omnis ab eius ut vel impedit?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet quidem debitis ad dolorum? Ipsum non pariatur maiores. Quod nobis aliquid aspernatur odit repudiandae omnis ab eius ut vel impedit?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet quidem debitis ad dolorum? Ipsum non pariatur maiores. Quod nobis aliquid aspernatur odit repudiandae omnis ab eius ut vel impedit?
      </p>
    `);
  }
}




/**
 * Module Exports
 */
export default CompanyServices;
