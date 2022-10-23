#!/bin/env bash

filename="$1"
[[ -z "${filename}" ]] && filename=index.js
cd $(git rev-parse --show-toplevel)
node --experimental-specifier-resolution=node ${filename}
cd -
