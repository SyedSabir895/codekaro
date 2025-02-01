import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'], // Email validation regex
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Example: enforce minimum password length
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

const User = mongoose.model('User', userSchema);
export default User;
