import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";
import { SharedStyles } from './shared-styles.js';
window.customElements.define('weave-driver', class extends LitElement {
  static get properties() {
    return {
      name: String
    };
  }

  static get styles() {
    return [SharedStyles, css`

            `];
  }

  render() {
    return html`
            <div>
                <h3>${this.name}</h3>
            </div>
        `;
  }

});