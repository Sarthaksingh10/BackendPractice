const fs = require("fs");

function LogReqRes(fileName) {
  return (req, res, next) => {
    fs.appendFile(
      fileName,
      `\n ${req.ip} : ${req.method}  : ${req.path}\n`,
      (err, data) => {
        next();
      }
    );
  };
}

module.exports = { LogReqRes };
