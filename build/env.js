const dotenv = require("dotenv");
const { resolve } = require("./utils");
const { existsSync } = require("fs");

// const LRURI_APP = /^LRURI_APP/i;
const mode = process.env.mode;

const base = resolve("../config/.env");
const pathList = [`${base}.${mode}`, base];
pathList.forEach((path) => {
  if (existsSync(path)) {
    dotenv.config({
      path,
    });
  }
});
// 采用过滤模式 - start
// let raw = Object.keys(process.env)
//   .filter((item) => LRURI_APP.test(item))
//   .reduce((prev, key) => {
//     prev[key] = process.env[key];
//     return prev;
//   }, {});
  // 采用过滤模式 - end
  const raw = Object.keys(process.env).reduce((prev, key) => {
    prev[key] = process.env[key];
    return prev;
  }, {});
const stringifiedEnv = JSON.stringify(raw);
module.exports = {
  raw,
  stringifiedEnv,
};
