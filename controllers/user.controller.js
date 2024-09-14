let users = [
  {
    id: 0,
    name: "gustavo",
  },
];

let id = 0;

const getAllUsers = (req, res) => {
  return res.status(200).json({
    users,
  });
};

const createNewUser = (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: "empty data",
    });
  }
  const newUser = req.body;
  newUser.id = ++id;
  users.push(newUser);
  return res.status(201).json({
    message: "new user created!",
  });
};

const updateUser = (req, res) => {
  let id = Number(req.params.id);
  let userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      error: "no user found",
    });
  }

  users[userIndex] = {
    ...users[userIndex],
    name: req.body.name || users[userIndex].name,
  };

  return res.status(200).json({
    data: "user updated succesfully",
  });
};

const deleteUserById = (req, res) => {
  let id = Number(req.params.id);
  let userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      error: "no user found",
    });
  }

  users = users.filter((user) => user.id !== id);
  return res.status(200).json({
    message: "user deleted!",
  });
};

module.exports = { getAllUsers, createNewUser, updateUser, deleteUserById };
