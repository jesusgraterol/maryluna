(() => {
  // src/scripts/modules/sidenav/sidenav.js
  var Sidenav = class {
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
      this.#documentEl = documentEl;
      this.#bodyEl = bodyEl;
      this.#el = document.getElementById(sidenavID);
      this.#el.addEventListener("click", (e) => this.#onElementClick(e));
      this.#openEl = document.getElementById(`${sidenavID}Open`);
      this.#closeEl = document.getElementById(`${sidenavID}Close`);
      this.#openEl.addEventListener("click", () => this.open());
      this.#closeEl.addEventListener("click", () => this.close());
      this.#documentEl.addEventListener("keyup", (e) => this.#onKeyboardClickUp(e));
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
      if (e.target.id === this.#el.id || e.target instanceof HTMLAnchorElement || e.target.parentNode instanceof HTMLAnchorElement) {
        this.close();
      }
    }
    /**
     * Triggers whenever a keyup event is emitted. The sidenav is closed if the escape key is pressed.
     * @param {*} e
     */
    #onKeyboardClickUp(e) {
      if (e.key === "Escape") {
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
        this.#bodyEl.style["overflow-y"] = "hidden";
        this.#el.style.display = "flex";
        this.#isOpened = true;
      }
    }
    /**
     * Closed the sidenav in case it is opened.
     */
    close() {
      if (this.#isOpened) {
        this.#bodyEl.style["overflow-y"] = "scroll";
        this.#el.style.display = "none";
        this.#isOpened = false;
      }
    }
  };
  var sidenav_default = Sidenav;

  // src/scripts/modules/sidenav/index.js
  var sidenav_default2 = sidenav_default;

  // src/scripts/modules/dialog/dialog.js
  var Dialog = class {
    // the instance of the body's element
    #bodyEl;
    // the instance of the dialog element as well as its contents
    #el;
    #titleEl;
    #closeEl;
    #contentEl;
    constructor(bodyEl, elementID) {
      this.#bodyEl = bodyEl;
      this.#el = document.getElementById(elementID);
      this.#titleEl = document.getElementById(`${elementID}Title`);
      this.#closeEl = document.getElementById(`${elementID}Close`);
      this.#contentEl = document.getElementById(`${elementID}Content`);
      this.#closeEl.addEventListener("click", () => this.close());
      this.#el.addEventListener("close", () => this.#onDialogClose());
    }
    /**
     * Builds and displays the modal based on the given content.
     * @param {*} title
     * @param {*} htmlContent
     */
    show(title, htmlContent) {
      this.#bodyEl.style["overflow-y"] = "hidden";
      this.#titleEl.innerText = title;
      this.#contentEl.innerHTML = htmlContent;
      this.#el.showModal();
    }
    /**
     * Resets the content and closes the dialog.
     */
    close() {
      this.#el.close();
      this.#titleEl.innerText = "";
      this.#contentEl.innerHTML = "";
    }
    /**
     * Triggers whenever the dialog is closed. Takes care of renabling the scrolling functionality to
     * the body
     */
    #onDialogClose() {
      this.#bodyEl.style["overflow-y"] = "scroll";
    }
  };
  var dialog_default = Dialog;

  // src/scripts/modules/dialog/index.js
  var dialog_default2 = dialog_default;

  // src/scripts/modules/scroll-to-top-button/scroll-to-top-button.js
  var ScrollToTopButton = class {
    // the instance of the document's element
    #documentEl;
    // the instance of the button's element
    #el;
    constructor(documentEl, buttonID) {
      this.#documentEl = documentEl;
      this.#el = document.getElementById(buttonID);
      this.#el.addEventListener("click", () => this.scrollToTop());
      document.addEventListener("scroll", () => this.#onScrollChanges());
    }
    /**
     * Triggers whenever the user scrolls on the page and determines if the button should be displayed
     * or hidden.
     */
    #onScrollChanges() {
      this.#el.style.display = this.#documentEl.scrollTop > 400 ? "flex" : "none";
    }
    /**
     * Scrolls the window back to the top of the app.
     */
    scrollToTop() {
      this.#documentEl.scrollTop = 0;
    }
  };
  var scroll_to_top_button_default = ScrollToTopButton;

  // src/scripts/modules/scroll-to-top-button/index.js
  var scroll_to_top_button_default2 = scroll_to_top_button_default;

  // src/scripts/modules/company-services/company-services.js
  var CompanyServices = class {
    // the instance of the dialog class
    #dialog;
    // the instance of the container's element
    #el;
    // the name of the attribute used to identify what dialogs to display
    #dataDialogAttributeName;
    constructor(dialog, servicesContainerID, dataDialogAttributeName) {
      this.#dialog = dialog;
      this.#el = document.getElementById(servicesContainerID);
      this.#el.addEventListener("click", (e) => this.#onContainerElementClick(e));
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
      const dataDialog = e.target.getAttribute(this.#dataDialogAttributeName);
      if (dataDialog === "lessons") {
        this.#displayLessonsDialog();
      } else if (dataDialog === "rent") {
        this.#displayRentDialog();
      } else if (dataDialog === "accomodation") {
        this.#displayAccomodationDialog();
      }
    }
    // Lessons Dialog
    #displayLessonsDialog() {
      this.#dialog.show("Clases de Kiteboarding", `
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet quidem debitis ad dolorum? Ipsum non pariatur maiores. Quod nobis aliquid aspernatur odit repudiandae omnis ab eius ut vel impedit?
      </p>
    `);
    }
    // Rent Dialog
    #displayRentDialog() {
      this.#dialog.show("Alquiler de Equipos", `
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
      this.#dialog.show("Estad\xEDa", `
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
  };
  var company_services_default = CompanyServices;

  // src/scripts/modules/company-services/index.js
  var company_services_default2 = company_services_default;

  // src/scripts/app.js
  var App = class {
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
      this.#documentEl = document.documentElement;
      this.#bodyEl = document.body;
      this.#appContainerEl = document.getElementById("appContainer");
      this.#mobileSidenav = new sidenav_default2(this.#documentEl, this.#bodyEl, "mobileSidenav");
      this.#dialog = new dialog_default2(this.#bodyEl, "dialog");
      this.#scrollToTop = new scroll_to_top_button_default2(this.#documentEl, "scrollToTopButton");
      this.#companyServices = new company_services_default2(this.#dialog, "services", "data-dialog-id");
      document.getElementById("currentYear").innerText = (/* @__PURE__ */ new Date()).getFullYear();
    }
  };
  var app = new App();
})();
//# sourceMappingURL=app.js.map
