import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

/** Mathematically constrained TikZ/PDF figures, grouped in same-origin SVG sheets. */
export default function GeometryFigure({id, caption}) {
  const sheet = useBaseUrl(`/img/math1a-advanced/geometry-${id.slice(0, 2)}.svg`);
  return (
    <figure style={{margin: '1.1rem auto', maxWidth: '640px'}}>
      <svg viewBox="0 0 900 600" role="img" aria-label={caption || id}
        style={{display: 'block', width: '100%', height: 'auto', background: '#fff', borderRadius: '6px'}}>
        <title>{caption || id}</title>
        <use href={`${sheet}#${id}`} x="0" y="0" width="900" height="600" />
      </svg>
      {caption && <figcaption style={{fontSize: '.86em', lineHeight: 1.6, color: 'var(--ifm-color-emphasis-700)', marginTop: '.4rem'}}>{caption}</figcaption>}
    </figure>
  );
}
