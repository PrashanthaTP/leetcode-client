#!/bin/env bash

filename="$1"
[[ -z "${filename}" ]] && filename=index.js
node --experimental-specifier-resolution=node ${filename}
