module.exports.resolvers = {
  Query: {
    users: (root, args, context) => {
      return context.prisma.users()
    }, 
  },
  Mutation: {
    createUser: (root, args, context) => {
      return context.prisma.createUser({
        username: args.username, 
        //hashedPassword:args.password.hash() 
      })
    },
    // updateUser: (roots, args, context) => {
    //   return context.prisma.updateUser(
    //     {data: {
    //       email: args.email, 
    //       bio: args.bio, 
    //       username: args.username, 
    //       token: args.token, 
    //       image: args.image
    //     },
    //     where: {id: args.id}
    //   })
    // },
    // deleteUser: (root, args, context) => {
    //   return context.prisma.deleteUser({id: args.id})
    // },
  },
}