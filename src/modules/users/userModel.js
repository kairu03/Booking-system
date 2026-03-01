import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  role: {
    type: String,
    enum: [ 'admin', 'user' ],
    default: 'user'
  }
}, { timestamps: true });

// hash password
userSchema.pre('save', async function (next) {

  // if password is not new & is not modified, next() to save to DB
  if (!this.isModified('password')) {
    return next();
  } else {
    // hash if password is new, next() to save to DB
    this.password = await bcrypt.hash(this.password, 10);
    next();
  }
});

const User = mongoose.model('User', userSchema);

export default User;