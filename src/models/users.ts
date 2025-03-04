import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phone: String,
  company: {
    type: String,
    required: false,
  },
  message: String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;


