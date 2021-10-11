import UserInfo from "./userSchema.js";

const getUsers = async (req, res) => {
  try {
    const userInfo = await UserInfo.find();
    res.status(200).json(userInfo);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const createUser = async (req, res) => {
  const newUser = new UserInfo({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });

  try {
    await newUser.save();

    res.status(201).json(newUser);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export { getUsers, createUser };
