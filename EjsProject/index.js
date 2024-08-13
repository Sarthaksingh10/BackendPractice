import express from "express";

const app = express();
const port = 8000;

app.get("", (req, res) => {
  const Data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "Guava", "Pineapple"],
    htmlcontent: "<em>This is some em text</em>",
  };
  res.render("index.ejs", Data);
});
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
