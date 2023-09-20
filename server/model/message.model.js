const { model, Schema } = require("mongoose");

const MessageSchema = Schema(
    {
      message: {
        text: { type: String, required: true },
      },
      users: Array,
      sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = model("Message", MessageSchema);