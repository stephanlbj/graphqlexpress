const userResolver = {
    Query: {
      users: async (_, __, { db }) => {

        const getUsers = await db.getAllUsers()
        return getUsers;
      },
    },
    Mutation: {
      addUser: async (_, { name, email }, { db }) => {
        return await db.addUser(name, email);
      },
    },
  };
  
  export default userResolver
  