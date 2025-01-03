const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.signup = (req, res) => {
    delete req.body._id;
    bcrypt
        .hash(req.body.password, 10)
        .then((hash) => {
            const user = new User({
                ...req.body,
                password: hash,
            });
            user.save()
                .then(() => res.status(201).json({ message: "User created!" }))
                .catch((error) => res.status(400).json({ error }));
        })
        .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res) => {
    delete req.body._id;
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) {
                return res.status(401).json({ error: "Incorrect Input!" });
            } else {
                bcrypt
                    .compare(req.body.password, user.password)
                    .then((valid) => {
                        if (!valid) {
                            return res
                                .status(401)
                                .json({ error: "Incorrect Input!" });
                        } else {
                            res.status(200).json({
                                userId: user._id,
                                firstname: user.firstname,
                                lastname: user.lastname,
                                token: jwt.sign(
                                    { userId: user._id },
                                    "RANDOM_TOKEN_SECRET",
                                    {
                                        expiresIn: "24h",
                                    },
                                ),
                            });
                        }
                    })
                    .catch((err) => res.status(500).json({ err }));
            }
        })
        .catch((err) => res.status(400).json({ err }));
};
