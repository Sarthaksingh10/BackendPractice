const express = require("express");
/* const users = require("./MOCK_DATA.json"); */
const app = express();

const PORT = 8080;
const userRouter = require("./Routes/user");
const { connectMongoDb } = require("./connection");
const { LogReqRes } = require("./Middleware");
//Middleware - Pluggin
app.use(express.urlencoded({ extended: false }));

app.use(LogReqRes("log.txt"));
//This will take it to the next function after resolving the middleware

//connecting the mongoose
connectMongoDb("mongodb://127.0.0.1:27017/Mongoose_practice").then(() =>
  console.log("Mongoose Connected")
);
app.use("/api/user", userRouter);
app.listen(PORT, () => {
  console.log(`The server is running on the PORT ${PORT}`);
});
