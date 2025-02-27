exports.registerUser = (req, res) => {
  res.status(200).send("Register user");
};

exports.loginUser = (req, res) => {
  res.status(200).send("Login user");
};

exports.logoutUser = (req, res) => {
  res.status(200).send("Logout user");
};

exports.forgotPassword = (req, res) => {
  res.status(200).send("Forgot password");
};

exports.resetPassword = (req, res) => {
  res.status(200).send("Reset password");
};

exports.updatePassword = (req, res) => {
  res.status(200).send("Update password");
};

exports.getProfile = (req, res) => {
  res.status(200).send("Profile Route");
};
