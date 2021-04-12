class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Adrian Quintanar Guerrero
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
