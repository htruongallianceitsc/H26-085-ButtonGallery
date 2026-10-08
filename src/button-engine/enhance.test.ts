import { describe, it, expect } from 'vitest';
import { BUTTON_GALLERY } from '../data/buttonGallery';
import { defaultParams } from './enhance';
import { v13SignaturePresets } from '../presets/v13-signature-collection';
import { v14SignaturePresets } from '../presets/v14-signature-collection';
import { v15SignaturePresets } from '../presets/v15-signature-collection';

describe('ButtonCraft preset/export contract', () => {
  it('contains 104 uniquely named presets', () => {
    expect(BUTTON_GALLERY).toHaveLength(104);
    expect(new Set(BUTTON_GALLERY.map(x => x.id)).size).toBe(104);
  });

  it('adds exactly 20 v1.3 signature presets', () => {
    expect(v13SignaturePresets).toHaveLength(20);
    expect(new Set(v13SignaturePresets.map(x => x.id)).size).toBe(20);
  });

  it('adds exactly 20 v1.4 signature presets', () => {
    expect(v14SignaturePresets).toHaveLength(20);
    expect(new Set(v14SignaturePresets.map(x => x.id)).size).toBe(20);
  });

  it('adds exactly 20 v1.5 signature presets', () => {
    expect(v15SignaturePresets).toHaveLength(20);
    expect(new Set(v15SignaturePresets.map(x => x.id)).size).toBe(20);
  });

  for (const preset of BUTTON_GALLERY) {
    it(`${preset.id}: exports escaped content, state and configured icon`, () => {
      const params = { ...defaultParams(preset), text: '<Hello & World>', iconName: 'Rocket', iconPosition: 'right' as const, size: 'lg' as const, radius: 16, disabled: true, borderWidth: 3 };
      const html = preset.generateHtml(params), css = preset.generateCss(params);
      const react = preset.generateReact(params), tailwind = preset.generateTailwind(params);
      expect(html).toContain('&lt;Hello &amp; World&gt;');
      expect(html).toContain('Rocket');
      expect(html).toContain('disabled');
      expect(css).toContain('border-radius:16px');
      expect(css).toContain('border-width:3px');
      expect(css).toContain('font-size:16px');
      expect(react).toContain('Rocket');
      expect(tailwind).toContain('Rocket');
    });
  }
});
