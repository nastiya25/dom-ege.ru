#!/usr/bin/env node
const subjects = require('../_data/subjects.json');
const fs = require('fs');
const lodash = require('lodash');

lodash.keys(subjects).forEach((menu) => {
  fs.writeFileSync(
    `${__dirname}/../subjects11/${menu}.html`,
    `---\nlayout: default-index\nmenu: ${menu}\ntitle: ${menu}\n---\n{% include subject-program.html %}`);
});
