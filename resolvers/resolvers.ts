module.exports.resolvers = {
  Query: {
    users: (root, args, context) => {
      return context.prisma.users()
    }, 
  },
  Mutation: {
    createUser: (root, args, context) => {
      return context.prisma.createUser({
        email: args.email, 
        bio: args.bio, 
        username: args.username, 
        token: args.token, 
        image: args.image
      })
    },
    deleteUser: (root, args, context) => {
      return context.prisma.deleteUser({id: args.id})
    },
  },
}