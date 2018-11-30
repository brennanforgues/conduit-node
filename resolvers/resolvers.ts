module.exports.resolvers = {
  Query: {
    users: (root, args, context) => {
      return context.prisma.users()
    }
  }
}