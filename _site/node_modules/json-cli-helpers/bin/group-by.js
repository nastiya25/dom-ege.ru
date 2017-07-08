#!/usr/bin/env node
var fs = require('fs');
var _ = require('underscore');
process.stdout.write(JSON.stringify( _.groupBy(JSON.parse(fs.readFileSync('/dev/stdin').toString()), process.argv[2])));
