#!/usr/bin/env node
const teachers = require('../_data/teachers.json');
const fs = require('fs');
const lodash = require('lodash');

lodash.keys(teachers).forEach((menu) => {
  fs.writeFileSync(
    `${__dirname}/../pages/${menu}.html`,
    `---\nlayout: default-index\nmenu: ${menu}\ntitle: ${menu}\n---\n{% include teacher.html %}`);
});
