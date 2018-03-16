import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import * as bodyParser from 'body-parser';
import { UniqueIdDirective } from 'directives';
import * as express from 'express';
import { makeExecutableSchema } from 'graphql-tools';

const PORT = 3000;

const typeDefs = `
  type Foo @uniqueId {
    name: String
  }

  type Query {
    dummy: String
  }

  type Mutation {
    dummy: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  schemaDirectives: {
    uniqueId: UniqueIdDirective,
  },
});

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

app.listen(PORT);
