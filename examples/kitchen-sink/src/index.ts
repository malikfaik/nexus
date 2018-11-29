import { ApolloServer } from "apollo-server";
import { makeSchema } from "gqliteral";
import path from "path";
import * as types from "./definitions";

const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(__dirname, "../kitchen-sink-schema.graphql"),
    typegen: path.join(__dirname, "../kitchen-sink-typegen.ts"),
  },
});

const server = new ApolloServer({
  schema,
});

const port = 4000;

server.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);