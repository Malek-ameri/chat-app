const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true, unique: true, minLength: 3 },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (value) => {
        return value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g);
      },
      message: "please enter valid email",
    },
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  avatar:{
    type:String,
    default:"user-default-avatar.jpeg"
  }
});

module.exports = model("User", userSchema);
