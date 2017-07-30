var passport = require("passport");
var express = require("express");
var router = express.Router();
var User = require("../models/User");

router.post("/register", (req, res) => {
    console.log(req.body);
    User.register(new User(
        { username: req.body.username}),
        req.body.password,
        (err, User) => {
            if (err) {
                return res.send({ User : User });
        }

        passport.authenticate("local")(req, res, () => {
            res.redirect("/login");
        });
    });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
    res.redirect("/");
});

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
});



module.exports = router;