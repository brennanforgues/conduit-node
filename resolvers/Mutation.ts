const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const { APP_SECRET, getUserId } = require("./utils")

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

const createArticle = async (root , args, context) => {
  const userId = getUserId(context)
  return context.prisma.createArticle({
    title: args.title,
    slug: args.slug, 
    description: args.description,
    body: args.body,
    tagList: args.tagList,
    favorited: false,
    favoritesCount: 0,
    author: { connect: { id: userId } },
  })
}

module.exports = {
  createUser,
  createArticle,
}