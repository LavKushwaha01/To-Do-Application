import { Schema as _Schema, model } from "mongoose";


  const UserSchema = new _Schema({
    email: String,
    password: String,
  });
  
export const User = model('User', UserSchema);

 
