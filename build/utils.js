const path = require("path");
module.exports.resolve = (filename) => path.resolve(__dirname, filename);
module.exports.jsonIfyObj = (obj) => {
  Object.keys(obj).map(item => {
    obj[item] = JSON.stringify(obj[item])
  })
}