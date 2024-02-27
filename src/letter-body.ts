import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

export const defaultLetterContent = `Betreff: Anfrage bezüglich Ihrer Produktpalette

Sehr geehrter Herr Schmidt,

bezugnehmend auf unser Telefonat vom 18. Dezember 2023, möchte ich gerne nähere Informationen zu Ihrer aktuellen Produktpalette anfordern.

Wir sind speziell an Ihren Lösungen im Bereich der erneuerbaren Energien interessiert und würden uns über detaillierte Beschreibungen sowie Preisinformationen freuen.

Bitte senden Sie uns entsprechende Kataloge und Produktblätter zu. Zudem wären wir dankbar, wenn Sie uns über bevorstehende Neuerungen in Ihrem Sortiment informieren könnten.

Für Rückfragen stehe ich Ihnen gerne telefonisch oder per E-Mail zur Verfügung. Wir freuen uns auf eine erfolgreiche Zusammenarbeit.

Mit freundlichen Grüßen

Max Mustermann

Geschäftsführer
Max Mustermann GmbH`;

@customElement('letter-body')
export class LetterBody extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    .letter-body {
      position: relative;
      left: 25mm;
      top: 95.46mm;
      width: 165mm;
      height: 150mm;
    }

    textarea {
      width: 100%;
      height: 100%;
      resize: none;
      border: none;
      hyphens: auto;
      text-align: justify;
      text-justify: inter-character;
      outline: none;
      font-family: var(--fast-letter-font-family);
      font-size: var(--fast-letter-font-size);
    }
  `;

  // Render the UI as a function of component state
  render() {
    return html`<div class="letter-body">
      <textarea placeholder="${defaultLetterContent}"></textarea>
    </div>`;
  }
}
