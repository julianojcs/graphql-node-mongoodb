const { GraphQLServer } = require("graphql-yoga")
const mongoose = require("mongoose")
const path = require("path")
const resolvers = require("./resolvers")

mongoose.connect("mongodb://localhost:27017/graphqlnode", {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
  useFindAndModify: false
})

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "schema.graphql"),
  resolvers
 })

server.start(() => console.log(`Server is running on http://localhost:4000`));