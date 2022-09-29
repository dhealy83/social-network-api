const { Schema, model } = require("mongoose");
const reactionSchema = require("./reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: true,
      require: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      get: (date) => {
        if (date) return date.toISOString().split("T")[0];
      },
    },
    username: [
      {
        type: String,
        require: true,
        ObjectId: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    reaction: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model("thought", thoughtSchema);
