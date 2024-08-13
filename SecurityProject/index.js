import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 8000;
var IsUserAuthorized = false;
app.use(bodyParser.urlencoded({ extended: true }));

function PasswordChecker(req, res, next) {
  const password = req.body["Password"];
  if (password === "RightPassword") {
    IsUserAuthorized = true;
  } else {
    IsUserAuthorized = false;
  }
  console.log(IsUserAuthorized);
  next();
}
app.use(PasswordChecker);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  if (IsUserAuthorized) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
