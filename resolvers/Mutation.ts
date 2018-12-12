const bcrypt = require("bcryptjs")

const createUser = async (root, args, context) => {
  const hashedPassword = await bcrypt.hash(args.password, 10)
  return await context.prisma.createUser({
    username: args.username,
    hashedPassword: hashedPassword
  })
}

module.exports = {
  createUser,
}