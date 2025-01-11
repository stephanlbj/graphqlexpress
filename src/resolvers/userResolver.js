const userResolver = {
    Query: {
      users: async (_, __, { db }) => {

        const getUsers = await db.getAllUsers()
        return getUsers;
      },

      user: async ( _, args, context) => {

        const getUser = await context.db.getUser(args.id)
        return getUser
      }
    },

    Mutation: {

      deleteUser: async  (_,{id},{db})=>{

        const restOfUSers = await db.deleteUser(id)
       
       return restOfUSers
      }
      , 
      addUser: async (_, args, { db }) => {

        const newUser = {
          ...args
        }
        return await db.addUser(newUser);
      },
      updateUser: async (_, args, {db})=>{
      return await db.updateUser(args)
      }
    },

    // User :{
    //   groups: async (parent, _, {db}) =>{

    //    return await db.getGroupById(String(parent.id))
    //   } 
    
    // }
  };
  
  export default userResolver
  