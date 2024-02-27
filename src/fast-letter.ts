import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './letter-body.js';

@customElement('fast-letter')
export class FastLetter extends LitElement {
  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--fast-letter-background-color);
    }

    main {
      flex-grow: 1;
    }
  `;

  render() {
    return html`
      <main>
        <letter-body></letter-body>
      </main>
    `;
  }
}
