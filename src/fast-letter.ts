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
      --fast-letter-font-family: 'Source Sans Pro';
      --fast-letter-font-size: 12px;
    }

    main {
      flex-grow: 1;
    }

    .container {
      display: flex;
    }

    .letter {
      position: relative;
      width: 210mm;
      height: 297mm;
      border: none;
      margin: 10px;
      outline: none;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      background-color: white;
    }
  `;

  render() {
    return html`
      <main>
        <div class="container">
          <div class="letter">
            <letter-body></letter-body>
          </div>
        </div>
      </main>
    `;
  }
}
