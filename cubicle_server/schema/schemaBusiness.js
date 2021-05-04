const graphql = require('graphql'); //use graphql package
const Post = require('../models/Posts/post');
const Comment = require('../models/Posts/commentaire');
//const Business = require ('../models/Business/business');
const Business = require('../models/Business/business.js');
const User = require('../user/User');
const _ = require('lodash');
ObjectId = require('mongodb').ObjectID;

/*Getting GraphQLObjectType function from 'graphql' to define the (dataType) 
 structure of our queries and their model type.
*/
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
} = graphql;

//Defining PostType with its fields.
const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLID },
    type: { type: GraphQLString },
    tags: { type: GraphQLList(GraphQLString) },
    description: { type: GraphQLString },
    media: { type: GraphQLList(GraphQLString) },
    created_at: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(parent, args) {
        // console.log(parent.userId);
        return User.findById(parent.userId);
      },
    },
    comments: {
      type: GraphQLList(CommentType),
      resolve(parent, args) {
        return Comment.find({ postId: ObjectId(parent.id) });
      },
    },
  }),
});

const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    id: { type: GraphQLID },
    userId: { type: GraphQLString },
    postId: { type: GraphQLID },
    type: { type: GraphQLString },
    description: { type: GraphQLString },
    created_at: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(parent, args) {
        // console.log(parent.userId);
        return User.findById(parent.userId);
      },
    },
  }),
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    datenaissance: { type: GraphQLString },
    profileimage: { type: GraphQLString },
    coverimage: { type: GraphQLString },
    AboutMe: { type: AboutMeType },
    Groups: { type: GraphQLList(GraphQLString) },
    Friendship: { type: GraphQLList(GraphQLString) },
  }),
});

const AboutMeType = new GraphQLObjectType({
  name: 'AboutMe',
  fields: () => ({
    description: { type: GraphQLString },
    adresse: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const BusinessType = new GraphQLObjectType({
  name: 'Business',
  fields: () => ({
    nom: { type: GraphQLString },
    //members: { type: GraphQLList(GraphQLString) },
  }),
});

//Defining RootQuery
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // Fields here will be the query for frontends
    //We are defining a 'car' query which can take (car ID ) to search in DB.
    post: {
      type: PostType,
      //argument passed by the user while making the query
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //Here we define how to get data from database source

        //this will return the book with id passed in argument
        //by the user
        return Post.findById(args.id);
      },
    },
    user: {
      type: UserType,
      //argument passed by the user while making the query
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //Here we define how to get data from database source

        //this will return the book with id passed in argument
        //by the user
        return User.findById(args.id);
      },
    },
    users: {
      type: GraphQLList(UserType),
      //argument passed by the user while making the query
      resolve(parent, args) {
        //Here we define how to get data from database source

        //this will return the book with id passed in argument
        //by the user
        return User.find({});
      },
    },
    posts: {
      type: GraphQLList(PostType), //Defining model for car Query
      //args field to extract argument came with car query, e.g : Id of the car object to extract its details.
      resolve(parent, args) {
        //code to get value  from DB
        /**
         * With the help of lodash library(_), we are trying to find car with id from 'CarsArray'
         * and returning its required data to calling tool.
         */
        return Post.find({});
      }, //resolve function
    }, //car query ends here

    Businesses: {
      type: GraphQLList(BusinessType),
      resolve(parent, args) {
        return Business.find({});
      },
    },
    comments: {
      type: GraphQLList(CommentType),
      //argument passed by the user while making the query
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //Here we define how to get data from database source

        //this will return the book with id passed in argument
        //by the user
        return Comment.find({ postId: ObjectId(args.id) });
      },
    },
  }, //fields end here
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPost: {
      type: PostType,
      args: {
        //GraphQLNonNull make these field required
        userId: { type: new GraphQLNonNull(GraphQLID) },
        type: { type: new GraphQLNonNull(GraphQLString) },
        tags: { type: new GraphQLList(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        media: { type: new GraphQLList(GraphQLString) },
        created_at: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let post = new Post({
          userId: args.userId,
          type: args.type,
          tags: args.tags,
          description: args.description,
          media: args.media,
          created_at: args.created_at,
        });
        return post.save();
      },
    },
    // addBook: {
    //   type: BookType,
    //   args: {
    //     name: { type: new GraphQLNonNull(GraphQLString) },
    //     pages: { type: new GraphQLNonNull(GraphQLInt) },
    //     authorID: { type: new GraphQLNonNull(GraphQLID) },
    //   },
    //   resolve(parent, args) {
    //     let book = new Book({
    //       name: args.name,
    //       pages: args.pages,
    //       authorID: args.authorID,
    //     });
    //     return book.save();
    //   },
    // },
  },
});

//exporting 'GraphQLSchema with RootQuery' for GraphqlHTTP middleware.
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
