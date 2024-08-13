import express from "express";
const port = 3000;
const app = express();

app.get("/", (req, res) => {
  const Today = new Date("august 18, 2024 ");
  const day = Today.getDay();

  var DayType = "a weekday";
  var Adv = "It's time to work hard";

  if (day === 0 || day === 6) {
    DayType = "the weekend";
    Adv = "It's time to relax and have fun";
  }
  res.render("index.ejs", {
    Day: DayType,
    Advice: Adv,
  });
});
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
