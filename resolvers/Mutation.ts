const createUser = (root, args, context) => {
  return context.prisma.createUser({
    username: args.username, 
    //hashedPassword:args.password.hash() 
  })
}

module.exports = {
  createUser,
}