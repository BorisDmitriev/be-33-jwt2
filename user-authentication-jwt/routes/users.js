var express = require('express')
var router = express.Router()

//validation
const { validationInputs } = require("../middleware/validation")
const { userValidationRule } = require("../lib/validation/userRules")

const {
  httpCreateUser,
  httpAuthenticateUser,
  httpGetAllUsers,
  httpGetSingleUser,
  httpUpdateUser,
  httpDeleteser
} = require("../controller/user.controller");

const { authenticateToken, protectAdminRoute } = require("../middleware/userValidation")

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get("/", authenticateToken, function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/all", authenticateToken, protectAdminRoute, httpGetAllUsers)

router.post('/signup', validationInputs(userValidationRule), httpCreateUser)
router.post('/login', httpAuthenticateUser)

router.use(authenticateToken).route("/:id")
                    .get(httpGetSingleUser)
                    .put(httpUpdateUser)
                    .delete(httpDeleteser)

  

module.exports = router;
