const fs = require('node:fs');
const parse = require('dotparser');

const dotFiles = fs.readdirSync('./dots');
for (const file of dotFiles) {
  if (!file.includes('Packet')) continue;
  try {
    const result = readDotFile(file);
    console.log(result[0].id)
    fs.writeFileSync(`./parsedDots/${file}.json`, JSON.stringify(result, null, 2));
  } catch (e) {
    console.error(`Error reading file ${file}: ${e.message}`);
  }
}

function readDotFile(file) {
  const dot = fs.readFileSync(`./dots/${file}`, 'utf-8');
  return parse(dot);
}