const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const APP_SECRET = "GraphQL-is-aw3some"

const createUser = async (root, args, context) => {
  const hashedPassword = await bcrypt.hash(args.password, 10)
  const user = await context.prisma.createUser({
    username: args.username,
    hashedPassword: hashedPassword
  })
  
  const token = jwt.sign({ userId: user.id }, APP_SECRET)
  
  return {
    user, 
    token,
  }
}

module.exports = {
  createUser,
}