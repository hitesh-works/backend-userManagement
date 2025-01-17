const {
  signup,
  login,
  getUsers,
  addUser,
  deleteUser,
} = require("../Controllers/AdminController");
const {
  signupValidation,
  loginValidation,
} = require("../Middlewares/AuthValidation");

const { verifyAdminToken } = require("../Middlewares/Auth");

const router = require("express").Router();

router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);
router.get("/getUsers", verifyAdminToken, getUsers);
router.post("/addUser", verifyAdminToken, addUser);
router.delete("/deleteUser/:userId", verifyAdminToken, deleteUser);

module.exports = router;
