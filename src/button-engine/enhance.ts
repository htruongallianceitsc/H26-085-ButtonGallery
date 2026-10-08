import type { ButtonDefinition, CustomParams } from '../types/button';

const escapeHtml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const sizeCss: Record<CustomParams['size'], string> = {
  sm: 'padding:8px 16px;font-size:12px', md: 'padding:12px 24px;font-size:14px',
  lg: 'padding:16px 32px;font-size:16px', xl: 'padding:20px 40px;font-size:18px',
};
export function defaultParams(preset: ButtonDefinition, soundEnabled = false): CustomParams {
  return { text: preset.defaultText, iconName: preset.defaultIcon, iconPosition: 'left', size: 'md',
    primaryColor: preset.defaultPrimaryColor, accentColor: preset.defaultAccentColor, radius: preset.defaultRadius,
    borderWidth: 1, disabled: false, state: 'default', animationSpeed: 1, soundEnabled };
}
export function supportedControls(preset: ButtonDefinition): Partial<Record<keyof CustomParams, boolean>> {
  return preset.supportedControls ?? {text:true, iconName:true, iconPosition:true, size:true, primaryColor:true, accentColor:true, radius:true, borderWidth:true, disabled:true, state:true, animationSpeed:true};
}
function getCssClass(preset: ButtonDefinition, params: CustomParams): string {
  const markup = preset.generateHtml(params);
  return /class=["']([^"']+)/.exec(markup)?.[1]?.split(' ')[0] ?? `bc-${preset.id}`;
}
function safeNumber(value: number, fallback = 1): number { return Number.isFinite(value) ? value : fallback; }
function status(params: CustomParams) { return params.disabled ? 'disabled' : params.state; }
function overrideCss(selector: string, params: CustomParams) {
  const speed = Math.max(0.1, Math.min(5, safeNumber(params.animationSpeed)));
  const border = Math.max(0, Math.min(20, safeNumber(params.borderWidth)));
  const radius = Math.max(0, Math.min(9999, safeNumber(params.radius)));
  const normalized = sizeCss[params.size] ?? sizeCss.md;
  return `\n/* ButtonCraft v1.1 shared control normalization */\n${selector} { ${normalized.replace(/;/g,' !important;')} !important; border-radius:${radius}px !important; border-width:${border}px !important; animation-duration:calc(1s / ${speed}) !important; --bc-primary:${params.primaryColor}; --bc-accent:${params.accentColor}; }\n${selector}:disabled,${selector}[aria-disabled="true"] { opacity:.45 !important; cursor:not-allowed !important; pointer-events:none; }\n${selector}[data-state="loading"] { cursor:progress; }\n${selector}[data-state="success"] { outline:2px solid #22c55e; outline-offset:2px; }\n${selector}[data-state="hover"] { filter:brightness(1.12); }\n${selector}[data-state="active"] { transform:translateY(2px); }\n@media (prefers-reduced-motion:reduce) { ${selector},${selector}::before,${selector}::after { transition-duration:.01ms !important; animation-duration:.01ms !important; animation-iteration-count:1 !important; } }`;
}
function markup(preset: ButtonDefinition, params: CustomParams): string {
  const cl = getCssClass(preset, params);
  const icon = params.iconPosition === 'none' || !params.iconName ? '' : `<span class="bc-icon" aria-hidden="true" data-icon="${escapeHtml(params.iconName)}">${escapeHtml(params.iconName)}</span>`;
  const content = params.state === 'loading' ? `${icon}<span>${escapeHtml(params.text)}</span><span class="bc-spinner" aria-hidden="true">…</span>` : (params.iconPosition === 'right' ? `<span>${escapeHtml(params.text)}</span>${icon}` : `${icon}<span>${escapeHtml(params.text)}</span>`);
  return `<button type="button" class="${escapeHtml(cl)}" data-state="${status(params)}" aria-label="${escapeHtml(params.text)}"${params.disabled || params.state === 'disabled' ? ' disabled' : ''}${params.state === 'loading' ? ' aria-busy="true"' : ''}>${content}</button>`;
}
export function enhancePreset(preset: ButtonDefinition): ButtonDefinition {
  const originalCss = preset.generateCss;
  return {
    ...preset,
    supportedControls: supportedControls(preset),
    generateCss: (p) => originalCss(p) + overrideCss(`.${getCssClass(preset,p)}`,p) + '\n.bc-icon{display:inline-flex;align-items:center;justify-content:center;font-size:.75em;margin-inline:4px}.bc-spinner{margin-left:4px}',
    generateHtml: (p) => markup(preset,p),
    generateReact: (p) => {
      const cl = getCssClass(preset,p);
      const icon = p.iconPosition === 'none' || !p.iconName ? '' : `      <span className="bc-icon" aria-hidden="true" data-icon={${JSON.stringify(p.iconName)}}>{${JSON.stringify(p.iconName)}}</span>\n`;
      const text = `      <span>{${JSON.stringify(p.text)}}</span>\n`;
      return `// Add the CSS tab output in button.css next to this component.\nimport React from 'react';\nimport './button.css';\n\nexport function CustomButton({ onClick }: { onClick?: () => void }) {\n  return (\n    <button type="button" className="${cl}" data-state="${status(p)}" aria-label={${JSON.stringify(p.text)}}${p.disabled || p.state === 'disabled' ? ' disabled' : ''}${p.state === 'loading' ? ' aria-busy="true"' : ''} onClick={onClick}>\n${p.iconPosition === 'right' ? text+icon : icon+text}    </button>\n  );\n}`;
    },
    generateTailwind: (p) => `<!-- Tailwind-compatible HTML (include CSS tab output for unique effects) -->\n${markup(preset,p)}`,
  };
}
