// TODO This will be a schema only. This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

// Look at act:23-24
const { Schema, model } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
        default: () => new Types.ObjectId(),
      },
    ],
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      require: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

reactionSchema.virtual("reaction").get(function () {
  return this.meta.reaction;
});

const Reaction = model("reaction", reactionSchema);

module.exports = reactionSchema;
