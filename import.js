const fs = require('fs');
const _ = require('lodash');

const path = process.argv[2];
const overwrite = process.argv[3];
const oldData = require('./parsedData.json');
const newData = require(path);

const parsedJsonArray = newData.map(datum => JSON.parse(datum['side effects']));
const parsedData = _.chain(parsedJsonArray).flattenDeep()
  .map(obj => obj['side effects'])
  .split('\n')
  .map(val => val.trim())
  .remove(val => val !== '')
  .uniq()
  .value();

let dataToWrite;

console.log(overwrite);
if (overwrite) {
  console.log('overwrite old data')
  dataToWrite = parsedData;
} else {
  console.log('merge new data with old data')
  dataToWrite = _.uniq(oldData.concat(parsedData));
}

fs.writeFile("./parsedData.json", JSON.stringify(dataToWrite), function(err) {
    console.log("Saving file...");
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
