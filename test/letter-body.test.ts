import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { defaultLetterContent, type LetterBody } from '../src/letter-body.js';
import '../src/letter-body.js';

describe('LetterBody', () => {
  let element: LetterBody;

  beforeEach(async () => {
    element = await fixture(html`<letter-body></letter-body>`);
  });

  it('renders a textarea element', () => {
    const textarea = element.shadowRoot?.querySelector('textarea');
    expect(textarea).to.exist;
  });

  it('sets the placeholder attribute correctly', () => {
    const textarea = element.shadowRoot?.querySelector('textarea');
    expect(textarea?.getAttribute('placeholder')).to.equal(
      defaultLetterContent,
    );
  });
});
