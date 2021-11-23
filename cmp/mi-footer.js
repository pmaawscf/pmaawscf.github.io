class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        IPN UPIICSA
        PAREDES MARTINEZ ANGELICA.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
