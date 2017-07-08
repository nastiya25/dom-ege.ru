#!/bin/bash
set -o errexit
set -o xtrace
set -o pipefail

./node_modules/.bin/gsjson 11HIARllbIOPq4FgpZbrchu80XvjRgLtVsfIbGFgP6s0 |
	./node_modules/.bin/index-by menu |
	./node_modules/.bin/json > _data/teachers.json