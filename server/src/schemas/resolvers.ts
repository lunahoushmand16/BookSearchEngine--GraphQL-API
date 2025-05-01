import User from '../models/User.js';
import { signToken } from '../services/auth.js';

const resolvers = {
  // ============================
  // QUERY resolvers
  // ============================
  Query: {
    // Get the currently logged-in user's profile (based on JWT in context)
    me: async (_parent: any, _args: any, context: any) => {
      if (context.user) {
        return await User.findById(context.user._id);
      }
      throw new Error('Not logged in');
    },
  },
  // ============================
  // MUTATION resolvers
  // ============================
  Mutation: {
    // Create a new user and return a JWT + user info
    addUser: async (_parent: any, { username, email, password }: any) => {
     try {
       const user = await User.create({ username, email, password });
       const token = signToken({ _id: user._id, username: user.username, email: user.email });
       return { token, user };
     } catch (err: any) {
        if (err.code === 11000) {
          throw new Error('Username or email already exists.');
        }
        throw err;
      }
    },

    // Login existing user by email/password and return a JWT + user info
    login: async (_parent: any, { email, password }: any) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new Error('Incorrect credentials');
      }

      const token = signToken({ _id: user._id, username: user.username, email: user.email });
      return { token, user };
    },

    // Save a new book to the current user's savedBooks array
    saveBook: async (_parent: any, { bookData }: any, context: any) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          context.user._id,
          { $addToSet: { savedBooks: bookData } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
      throw new Error('You must be logged in to save a book.');
    },

    // Remove a book from the current user's savedBooks by bookId
    removeBook: async (_parent: any, { bookId }: any, context: any) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          context.user._id,
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new Error('You must be logged in to remove a book.');
    },
  },
};

export default resolvers;