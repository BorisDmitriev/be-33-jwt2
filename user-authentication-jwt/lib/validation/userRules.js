const { check } = require("express-validator")

exports.userValidationRule = [
    check("username")
       .notEmpty()
       .withMessage("Username required")
       .trim(),
    check("email")
        .isEmail()
        .withMessage("Please enter a valid E-Mail address")
        .trim(),
    check("password")
        .isLength( {min:3} )
        .withMessage("Password is too short")
]