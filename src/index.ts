import { GraphQLServer } from 'graphql-yoga'
import * as cors from 'cors'

import { default as resolvers } from '../resolvers'
import { default as typeDefs } from '../typeDefs'

const options = { port: 4000 }

const server = new GraphQLServer({
  resolvers,
  typeDefs
})

server.use(cors())

server.start(options, () => {
  console.log(`😎  Server Running ⚡  on http://localhost:${options.port}`)
})
