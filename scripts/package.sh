#!/bin/sh
# Packs the extension/ folder into a zip for a release.
set -e
version=$(sed -nE 's/.*"version": "([^"]+)".*/\1/p' extension/manifest.json)
mkdir -p dist
rm -f "dist/4curls-$version.zip"
(cd extension && zip -qr "../dist/4curls-$version.zip" . -x '.DS_Store' -x '*/.DS_Store')
zip -q "dist/4curls-$version.zip" LICENSE BRAND.md
echo "dist/4curls-$version.zip"
