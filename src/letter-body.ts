import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

const defaultLetterContent = `Betreff: Anfrage bezüglich Ihrer Produktpalette

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
  static styles = css``;

  // Declare reactive properties
  @property()
  text: string = defaultLetterContent;

  // Render the UI as a function of component state
  render() {
    return html`<textarea placeholder="${this.text}"></textarea>`;
  }
}
