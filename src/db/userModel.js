const users = [
    {
        id:1,
        name: 'The Awakening',
        email: 'Kate Chopin',
      },
      {
        id:2,
        name: 'City of Glass',
        email: 'Paul Auster',
      }
];

const userModel = {
  getAllUsers: async () => {
    return users;
  },
  addUser: async (name, email) => {
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    return newUser;
  },
};

export default userModel;