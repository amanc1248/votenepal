const express = require("express");
const { registerUser, savePost,getPosts,checkSingleUser } = require("../controller/controller");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/post").post(savePost);
router.route("/posts").get(getPosts)
router.route("/user/:id").get(checkSingleUser);

module.exports = router;
