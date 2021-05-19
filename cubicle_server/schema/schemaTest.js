const graphql = require('graphql'); //use graphql package
const Post = require('../models/Posts/post');
const GroupPost = require('../models/Posts/groupPost');
const BusinessPost = require('../models/Posts/businessPost');
const Group = require('../models/group');
const Business = require('../models/Business/business');
const Comment = require('../models/Posts/commentaire');
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
    likes: { type: GraphQLList(GraphQLString) },
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
    likesList: {
      type: GraphQLList(UserType),
      resolve(parent, args) {
        var list = [];
        parent.likes.map((like) => {
          list.push(ObjectId(like));
        });
        // console.log(parent.userId);
        return User.find({ _id: { $in: list } });
      },
    },
  }),
});

const GroupPostType = new GraphQLObjectType({
  name: 'GroupPost',
  fields: () => ({
    id: { type: GraphQLID },
    groupId: { type: GraphQLID },
    tags: { type: GraphQLList(GraphQLString) },
    description: { type: GraphQLString },
    media: { type: GraphQLList(GraphQLString) },
    likes: { type: GraphQLList(GraphQLString) },
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
    group: {
      type: GroupType,
      resolve(parent, args) {
        // console.log(parent.userId);
        return Group.findById(ObjectId(parent.groupId));
      },
    },
    likesList: {
      type: GraphQLList(UserType),
      resolve(parent, args) {
        var list = [];
        parent.likes.map((like) => {
          list.push(ObjectId(like));
        });
        // console.log(parent.userId);
        return User.find({ _id: { $in: list } });
      },
    },
  }),
});
const BusinessPostType = new GraphQLObjectType({
  name: 'BusinessPost',
  fields: () => ({
    id: { type: GraphQLID },
    businessId: { type: GraphQLID },
    tags: { type: GraphQLList(GraphQLString) },
    description: { type: GraphQLString },
    media: { type: GraphQLList(GraphQLString) },
    likes: { type: GraphQLList(GraphQLString) },
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
    business: {
      type: BusinessType,
      resolve(parent, args) {
        // console.log(parent.userId);
        return Business.findById(ObjectId(parent.businessId));
      },
    },
    likesList: {
      type: GraphQLList(UserType),
      resolve(parent, args) {
        var list = [];
        parent.likes.map((like) => {
          list.push(ObjectId(like));
        });
        // console.log(parent.userId);
        return User.find({ _id: { $in: list } });
      },
    },
  }),
});

const GroupType = new GraphQLObjectType({
  name: 'Group',
  fields: () => ({
    id: { type: GraphQLID },
    groupname: { type: GraphQLString },
    groupimage: { type: GraphQLString },
    description: { type: GraphQLString },
    Owner: { type: GraphQLString },
    members: { type: GraphQLList(GraphQLString) },
    membersList: {
      type: GraphQLList(UserType),
      resolve(parent, args) {
        var list = [];
        parent.members.map((member) => {
          list.push(ObjectId(member));
        });
        // console.log(parent.userId);
        return User.find({ _id: { $in: list } });
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
const BusinessType = new GraphQLObjectType({
  name: 'Business',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    desc: { type: GraphQLString },
    Owner: { type: GraphQLString },
    members: { type: GraphQLList(GraphQLString) },
    membersList: {
      type: GraphQLList(UserType),
      resolve(parent, args) {
        var list = [];
        parent.members.map((member) => {
          list.push(ObjectId(member));
        });
        // console.log(parent.userId);
        return User.find({ _id: { $in: list } });
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
    userId: {
      type: UserType,
      resolve(parent, args) {
        // console.log(parent.userId);
        return User.findById(parent.userId);
      },
    },
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

//Defining RootQuery
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Post.findById(args.id);
      },
    },
    group: {
      type: GroupType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Group.findById(args.id);
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },
    users: {
      type: GraphQLList(UserType),
      resolve(parent, args) {
        return User.find({});
      },
    },
    posts: {
      type: GraphQLList(PostType),
      resolve(parent, args) {
        return Post.find({}).sort('-created_at');
      },
    },
    postsByUser: {
      type: GraphQLList(PostType),
      args: { userId: { type: GraphQLID } },
      resolve(parent, args) {
        return Post.find({ userId: ObjectId(args.userId) }).sort('-created_at');
      },
    },
    comments: {
      type: GraphQLList(CommentType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Comment.find({ postId: ObjectId(args.id) });
      },
    },
    groupPosts: {
      type: GraphQLList(GroupPostType),
      args: { groupid: { type: GraphQLList(GraphQLString) } },
      resolve(parent, args) {
        return GroupPost.find({ groupId: { $in: args.groupid } }).sort(
          '-created_at'
        );
      },
    },
    businessPosts: {
      type: GraphQLList(BusinessPostType),
      args: { businessid: { type: GraphQLList(GraphQLString) } },
      resolve(parent, args) {
        return BusinessPost.find({ businessId: { $in: args.businessid } }).sort(
          '-created_at'
        );
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPost: {
      type: PostType,
      args: {
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
    addComment: {
      type: PostType,
      args: {
        userId: { type: new GraphQLNonNull(GraphQLID) },
        postId: { type: new GraphQLNonNull(GraphQLID) },
        type: { type: GraphQLString },
        description: { type: new GraphQLNonNull(GraphQLString) },
        created_at: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let comment = new Comment({
          userId: args.userId,
          postId: args.postId,
          type: args.type,
          description: args.description,
          created_at: args.created_at,
        });
        return comment.save();
      },
    },
    addLike: {
      type: PostType,
      args: {
        userId: { type: new GraphQLNonNull(GraphQLID) },
        postId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Post.findOneAndUpdate(
          { _id: args.postId },
          { $addToSet: { likes: args.userId } }
        );
      },
    },
    unLike: {
      type: PostType,
      args: {
        userId: { type: new GraphQLNonNull(GraphQLID) },
        postId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Post.findOneAndUpdate(
          { _id: args.postId },
          { $pull: { likes: args.userId } }
        );
      },
    },
    addLikeGroup: {
      type: GroupPostType,
      args: {
        userId: { type: new GraphQLNonNull(GraphQLID) },
        postId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return GroupPost.findOneAndUpdate(
          { _id: args.postId },
          { $addToSet: { likes: args.userId } }
        );
      },
    },
    unLikeGroup: {
      type: GroupPostType,
      args: {
        userId: { type: new GraphQLNonNull(GraphQLID) },
        postId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return GroupPost.findOneAndUpdate(
          { _id: args.postId },
          { $pull: { likes: args.userId } }
        );
      },
    },
    addGroupPost: {
      type: GroupPostType,
      args: {
        userId: { type: new GraphQLNonNull(GraphQLID) },
        groupId: { type: new GraphQLNonNull(GraphQLID) },
        tags: { type: new GraphQLList(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        media: { type: new GraphQLList(GraphQLString) },
        created_at: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let grouppost = new GroupPost({
          userId: args.userId,
          groupId: args.groupId,
          tags: args.tags,
          description: args.description,
          media: args.media,
          created_at: args.created_at,
        });
        return grouppost.save();
      },
    },
    addBusinessPost: {
      type: BusinessPostType,
      args: {
        userId: { type: new GraphQLNonNull(GraphQLID) },
        businessId: { type: new GraphQLNonNull(GraphQLID) },
        tags: { type: new GraphQLList(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        media: { type: new GraphQLList(GraphQLString) },
        created_at: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let businesspost = new BusinessPost({
          userId: args.userId,
          businessId: args.businessId,
          tags: args.tags,
          description: args.description,
          media: args.media,
          created_at: args.created_at,
        });
        return businesspost.save();
      },
    },
    addLikeBusiness: {
      type: BusinessPostType,
      args: {
        userId: { type: new GraphQLNonNull(GraphQLID) },
        postId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return BusinessPost.findOneAndUpdate(
          { _id: args.postId },
          { $addToSet: { likes: args.userId } }
        );
      },
    },
    unLikeBusiness: {
      type: BusinessPostType,
      args: {
        userId: { type: new GraphQLNonNull(GraphQLID) },
        postId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return BusinessPost.findOneAndUpdate(
          { _id: args.postId },
          { $pull: { likes: args.userId } }
        );
      },
    },
  },
});

//exporting 'GraphQLSchema with RootQuery' for GraphqlHTTP middleware.
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
