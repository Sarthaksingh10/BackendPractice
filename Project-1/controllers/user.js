const User = require("../models/user");

handleGetAllUsers = async (req, res) => {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
};

handleGetUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ msg: "user not found" });
  return res.json(user);
};

handleDeleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "Success" });
};

handlePatch = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, {
    lastName: "Dingding",
  });
  return res.json({ status: "Success" });
};

handleNewUsers = async (req, res) => {
  const body = req.body;
  if (
    !body.First_Name ||
    !body.Last_Name ||
    !body.email ||
    !body.Job_Titile ||
    !body.Gender
  ) {
    return res.status(400).json({ msg: "All fields are required..." });
  }
  const Result = await User.create({
    firstName: body.First_Name,
    lastName: body.Last_Name,
    Gender: body.Gender,
    email: body.email,
    JobTitle: body.Job_Titile,
  });

  return res.status(201).json({ msg: "success", id: Result._id });
};
module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleDeleteUser,
  handlePatch,
  handleNewUsers,
};
