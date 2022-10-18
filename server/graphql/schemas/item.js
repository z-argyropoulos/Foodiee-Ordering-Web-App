const { buildSchema } = require('graphql');
const itemSchema = buildSchema(`
type Query {
  title: String!,
  description: String,
  price: Number!,
  quantity: Number!,
  category: String
}
`);
