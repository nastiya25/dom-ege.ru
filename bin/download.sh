#!/bin/bash
set -o errexit
set -o xtrace
set -o pipefail

./node_modules/.bin/gsjson 11HIARllbIOPq4FgpZbrchu80XvjRgLtVsfIbGFgP6s0 |
	./node_modules/.bin/index-by menu |
	./node_modules/.bin/json > _data/teachers.json
  
  
curl 'https://docs.google.com/spreadsheets/d/11HIARllbIOPq4FgpZbrchu80XvjRgLtVsfIbGFgP6s0/pub?gid=368780656&single=true&output=csv' > _data/subjects.csv
curl 'https://docs.google.com/spreadsheets/d/11HIARllbIOPq4FgpZbrchu80XvjRgLtVsfIbGFgP6s0/pub?gid=217644199&single=true&output=csv' > _data/reviews.csv