let users = [
    {
        id:1,
        name: 'The Awakening',
        email: 'Kate Chopin'
      },
      {
        id:2,
        name: 'City of Glass',
        email: 'Paul Auster'
      }
];

let groups = [
  { id: "101", name: "Admins", memberIds: ["1", "2"] },
  { id: "102", name: "Editors", memberIds: ["2"] },
];

let userModel = {
  getAllUsers:  () => {
    return users;
  }
  ,
  getUser : (id)=>{
    return  users.find((user)=>user.id==id)
  }
  , 

  getGroupById :  (id)=>{
    console.log("Id:", id)
  return groups.filter((group) => group.memberIds.includes(id))
  }
  ,
  deleteUser :(id)=>{
   users =  users.filter((user)=>user.id!== Number(id))
   return users
  }
,
   addUser:  (sentUser) => {

    const {user} = sentUser
    const newObj = {
      ...user,
      id: Math.floor(Math.random() * 1000)
    }
   
    const findUser =  users.find((user)=>user.id===newObj.id)
   if(findUser !== undefined)
      return {
      success: false,
      user: null,
      message: `User already exists with this Id: ${findUser.id}`
    }
    
    
    
     users.push(newObj)
     return {
      success: true,
      user: newObj,
      message: "User added successfully"
    };
  },
  updateUser :(data)=>{
    const {id, user} = data
    const getUser =  users.find((user)=>user.id===Number(id))
 if(getUser === undefined)
  return  {
    success: false,
    user: null,
    message: "Object not found!"
  };
   
  getUser.email = user.email
  getUser.name = user.name

  return  {
    success: true,
    user: getUser,
    message: "User updated successfully"
  };
 }
};

export default userModel;