const { prisma } = require("./generated/prisma-client")
const { ApolloServer, gql } = require("apollo-server")
const Query = require("./resolvers/Query")
const Mutation = require("./resolvers/Mutation")
const Article = require("./resolvers/Article")
const fs = require("fs")

const resolvers = {
  Query,
  Mutation, 
  Article,
}

const server = new ApolloServer({
  typeDefs: gql`${fs.readFileSync(__dirname.concat("/typedefs/schema.graphql"), "utf8")}`,
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});