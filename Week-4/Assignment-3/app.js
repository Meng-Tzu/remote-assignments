// import modules
import express from "express";
const app = express();
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { getEmails, getPassword, createData } from "./database.js";

// middleware
app.use(express.json());
// app.use(express.static("public")); //取得static file
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "pug");

let error = false;

// Home Page Setting
app.get("/index", (req, res) => {
  if (error) {
    res.send("Ooops! Something went wrong. Please sign up / sign in again!");
    error = false;
  } else {
    res.render("index");
  }
});

// Member Page Setting
app.get("/member", (req, res) => {
  const userEmail = req.cookies.userEmail;
  if (userEmail) {
    res.render("member", { email: userEmail });
  } else {
    res.redirect("/index");
  }
});

// Sign-Up Page
app.post("/signUp", async (req, res) => {
  const inputEmail = req.body.email;
  const inputPassword = req.body.password;
  const emails = await getEmails();

  if (emails.includes(inputEmail)) {
    error = true;
    res.redirect("/index");
  } else {
    await createData(inputEmail, inputPassword);
    res.cookie("userEmail", inputEmail);
    res.redirect("/member");
  }
});

// Sign-In Page
app.post("/signIn", async (req, res) => {
  const inputEmail = req.body.email;
  const inputPassword = req.body.password;
  const emails = await getEmails();

  // 若email帳號已存在於database
  if (emails.includes(inputEmail)) {
    const correctPassword = await getPassword(inputEmail);

    // 確認密碼是否正確
    if (inputPassword === correctPassword) {
      res.cookie("userEmail", inputEmail);
      res.redirect("/member");
    } else {
      error = true;
      res.redirect("/index");
    }
  } else {
    error = true;
    res.redirect("/index");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
