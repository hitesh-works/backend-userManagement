const {
  signup,
  login,
  profile,
  updateProfile,
  deleteUser,
  logout,
  forgotPassword,
  resetPassword,
} = require("../Controllers/AuthController");
const {
  signupValidation,
  loginValidation,
} = require("../Middlewares/AuthValidation");

const { ensureAuthenticated, isAuthenticated } = require("../Middlewares/Auth");

const router = require("express").Router();

router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);
router.get("/profile", ensureAuthenticated, profile);
router.put("/updateprofile", ensureAuthenticated, updateProfile);
router.post("/forgotPassword", ensureAuthenticated, forgotPassword);
router.post("/resetPassword", ensureAuthenticated, resetPassword);
router.delete("/deleteuser", ensureAuthenticated, deleteUser);
router.get("/logout", isAuthenticated, logout);

module.exports = router;
