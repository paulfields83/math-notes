# Figure generation pipeline

Quadratic lesson figures are authored in `figure-src/math1a-advanced/quadratic/` as LaTeX/TikZ.

When those sources change, `generate-quadratic-figures.yml` compiles them with XeLaTeX, converts the resulting PDFs to SVG with Inkscape, and commits the generated SVGs under `static/img/math1a-advanced/`.

The normal Docusaurus deployment then publishes those committed SVG assets.
