//import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
//import mocks from './mocks';

import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type Query {
  # testString: String
  author(firstName: String, lastName: String): Author
  allAuthors: [Author]
  getFortuneCookie: String
}

type Author {
  id: Int
  firstName: String
  lastName: String
  posts: [Post]
}

type Post {
  id: Int
  title: String
  text: String
  views: Int
  author: Author
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

//addMockFunctionsToSchema({ schema, mocks });

export default schema;
