const users = (root, args, context) => {
  return context.prisma.users()
}

const articles = (root , args, context) => {
  return context.prisma.articles()
}

module.exports = {
  users,
  articles,
}