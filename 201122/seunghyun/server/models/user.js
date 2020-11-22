const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

const userSchema = new Schema({
    name: {
        type: String,
        maxlength: 50,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        maxlength: 70,
    },
    role: {
        type: Number,
        default: 0,
    },
    image: String,
    token: {
        type: String,
    },
    tokenExp: {
        type: Number,
    },
});

userSchema.pre("save", function (next) {
    const user = this;
    if (user.isModified("password")) {
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err);

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err);
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
    bcrypt.compare(plainPassword, this.password, function (err, result) {
        if (err) return cb(err);
        cb(null, result);
    });
};

userSchema.methods.generateToken = function (cb) {
    const user = this;

    const token = jwt.sign(user._id.toString(), "token");
    user.token = token;
    user.save(function (err, user) {
        if (err) return cb(err);
        cb(null, user);
    });
};

userSchema.statics.findByToken = function (token, cb) {
    const user = this;

    jwt.verify(token, "token", function (err, decoded) {
        user.findOne(
            {
                _id: decoded,
                token: token,
            },
            function (err, user) {
                if (err) return cb(err);
                cb(null, user);
            }
        );
    });
};

const User = mongoose.model("User", userSchema);
module.exports = {
    User,
};
