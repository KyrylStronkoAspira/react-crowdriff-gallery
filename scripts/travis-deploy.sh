#!/bin/bash
set -e

# Generate the .npmrc with token
echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > $HOME/.npmrc

# Publish to NPM
npm publish
