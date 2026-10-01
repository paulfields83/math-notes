#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
SRC="$ROOT/figure-src/math1a-advanced/quadratic"
TMP="$ROOT/.figure-build"
mkdir -p "$TMP"

build_one() {
  local lesson="$1"
  local stem="$2"
  local src="$SRC/$lesson/$stem.tex"
  local out="$ROOT/static/img/math1a-advanced/$lesson/$stem.svg"
  local work="$TMP/$lesson-$stem"
  mkdir -p "$work" "$(dirname "$out")"

  xelatex -halt-on-error -interaction=nonstopmode -output-directory="$work" "$src" >/dev/null
  inkscape "$work/$stem.pdf" --pdf-poppler --export-text-to-path --export-filename="$out" >/dev/null
}

build_one lesson04 abs-transform
build_one lesson05 fixed-domain-moving-axis
build_one lesson05 open-closed-extrema
build_one lesson07 root-tools
build_one lesson07 signs-0-1-2
build_one lesson08 tool-selection-flow

rm -rf "$TMP"
