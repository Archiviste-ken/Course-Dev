import mongoos from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    chat: {
      type: mongoose.Schema.Types.id,
      ref: "chat",
      required: "true",
    },
    content: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "ai"],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const messageModel = mongoose.model("message", messageSchema);

export default messageModel;
