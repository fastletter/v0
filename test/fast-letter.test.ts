import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { FastLetter } from '../src/fast-letter.js';
import '../src/fast-letter.js';

describe('FastLetter', () => {
  let element: FastLetter;
  beforeEach(async () => {
    element = await fixture(html`<fast-letter></fast-letter>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
