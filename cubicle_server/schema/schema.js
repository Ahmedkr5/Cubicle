const graphql = require('graphql'); //use graphql package

const _ = require('lodash');

/*Getting GraphQLObjectType function from 'graphql' to define the (dataType) 
 structure of our queries and their model type.
*/
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
} = graphql;

const CarsArray = [
  { id: '1', name: 'S-Class', model: '2019', company: 'Mercedes' },
  { id: '2', name: 'Continental GT', model: '2019', company: 'Bentley' },
  { id: '3', name: 'Phantom', model: '2019', company: 'Rolls-Royce' },
  { id: '4', name: 'Panamera', model: '2019', company: 'Porsche' },
  { id: '5', name: 'A8', model: '2019', company: 'Audi' },
  { id: '6', name: 'I-Pace', model: '2019', company: 'Jaguar' },
];

//Defining CarType with its fields.
const CarType = new GraphQLObjectType({
  name: 'Car',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    model: { type: GraphQLInt },
    company: { type: GraphQLString },
  }),
});

//Defining RootQuery
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // Fields here will be the query for frontends
    //We are defining a 'car' query which can take (car ID ) to search in DB.
    car: {
      type: CarType, //Defining model for car Query
      args: { id: { type: GraphQLID } },
      //args field to extract argument came with car query, e.g : Id of the car object to extract its details.
      resolve(parent, args) {
        //code to get value  from DB
        /**
         * With the help of lodash library(_), we are trying to find car with id from 'CarsArray'
         * and returning its required data to calling tool.
         */
        return _.find(CarsArray, { id: args.id });
      }, //resolve function
    }, //car query ends here
  }, //fields end here
});

//exporting 'GraphQLSchema with RootQuery' for GraphqlHTTP middleware.
module.exports = new GraphQLSchema({
  query: RootQuery,
});
