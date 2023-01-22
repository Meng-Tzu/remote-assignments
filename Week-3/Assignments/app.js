// 導入模組
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors"); //安裝cors套件可讓其他網域取得本伺服器資訊

// middleware
app.use(express.static("public")); //取得static file
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.set("view engine", "pug");

// Assignment 1: Build Web Server
app.get("/", (req, res) => {
  res.send("Hello, My Server!");
});

// Assignment 2~3: Calculating
app.get("/data", (req, res) => {
  const { number } = req.query; //取得query string的內容
  const N = Number(number);

  if (!N) {
    res.send("Lack of Parameter");
  } else if (isNaN(N) === true || Number.isInteger(N) === false || N < 0) {
    //判斷number變數值是否為數字類型
    res.send("Wrong Parameter");
  } else {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
      sum += i;
    }
    res.send(`${sum}`);
  }
});

// Assignment 4: HTTP Cookie Setting
app.get("/myName", (req, res) => {
  username = req.cookies.username;
  if (username) {
    res.render("name", { name: username });
  } else {
    res.render("name");
  }
});

app.get("/trackName", (req, res) => {
  res.render("name");
});

app.post("/trackName", (req, res) => {
  res.cookie("username", req.body.username);
  res.redirect("/myName");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
