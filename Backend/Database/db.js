import { Schema as _Schema, model } from "mongoose";


  const UserSchema = new _Schema({
    email: String,
    password: String,
  });

 const TodoSchema = new _Schema({
  todo: {
    type: String,
    required: true
  },
  date: {
    type: String, // Format: YYYY-MM-DD
    required: true
  },
  email: {
    type: String,
    required: true,
    ref: 'User'
  },
  completed: {
    type: Boolean,
    default: false
  }
  });
  
export const User = model('User', UserSchema);
export const Todo = model("Todo", TodoSchema)

 
