const author = async (parent, args, context) => {
  return context.prisma.article({ id: parent.id }).author()
}

module.exports = {
  author,
}