import UserInfo from "./userSchema.js";

const getUsers = async (req, res) => {
  try {
    const userInfo = await UserInfo.find();
    console.log(userInfo);
    res.status(200).json(userInfo);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const createUser = async (req, res) => {
  const user = req.body;
  const newUser = new UserInfo(user);

  try {
    await newUser.save();

    res.status(201).json(newUser);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export { getUsers, createUser };
