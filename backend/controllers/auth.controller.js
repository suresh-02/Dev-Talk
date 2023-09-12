import { db } from "../db.js";
import bcrypt from "bcryptjs";

//! controller for new user registration.

export const register = (req, res) => {
  const q = "SELECT * FROM users WHERE email = ? OR username = ?"; //? query to search the existing user

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err); //! if any error occurs return it here.
    if (data.length)
      //? if already the user is present return the json .
      return res.status(409).json({
        err: "user already exist", //! error message
      });

    const hash = bcrypt.hashSync(req.body.password, 10); //? hash the passsword

    const q =
      "INSERT INTO users(`email`,`username`,`password`,`img`) VALUES (?,?,?,?)"; //? query to insert new values

    const values = [req.body.email, req.body.username, hash, req.body.img]; //? user input values

    db.query(q, values, (err, data) => {
      if (err) return res.json(err);
      return res.status(201);
    });
  });
};

//! controller for the user login

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username=?"; //? query to check existing user
  const username = req.body.username; //? user sent username
  const password = req.body.password; //? user sent password

  db.query(q, [username], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0)
      return res.status(404).json({
        err: "USER NOT FOUND",
      });

    //? to validate the password is valid or not.

    const isValidPassword = bcrypt.compareSync(password, data[0].password);

    if (!isValidPassword) {
      return res.status(404).json({
        err: "Invalid username or password!",
      });
    }
  });
};
