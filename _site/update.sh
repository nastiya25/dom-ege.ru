#!/bin/bash
set -o errexit
set -o xtrace
set -o pipefail

rm -rf pages || true
mkdir pages
./bin/download.sh
./bin/recreate-pages.js
./bin/recreate-pages-subjects9.js
./bin/recreate-pages-subjects11.js
