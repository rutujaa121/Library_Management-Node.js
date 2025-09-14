import express from "express";
import conn from "../config/db.js";

const router = express.Router();

// Home page
router.get("/", (req, res) => {
  res.render("user/home", { title: "Home" });
});

// About page
router.get("/about", (req, res) => {
  res.render("user/about", { title: "About" });
});

// Notice page
router.get("/notice", (req, res) => {
  res.render("user/notice", { title: "Notice" });
});

// Registration page
router.get("/registration", (req, res) => {
  res.render("user/registration", { title: "Registration" });
});

export default router;
