// TODO This will be a schema only. This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

// Look at act:23-24
const { Schema, model, SchemaType } = require("mongoose");

const reactionSchema = new SchemaType({
  reactionId: [
    {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
  ],
  reactionBody: {
    type: String,
    require: true,
    maxLength: 280,
  },
  username: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    get: (date) => {
      if (date) return date.toISOString().split("T")[0];
    },
  },
  toJSON: {
    virtuals: true,
  },
});

const Reaction = model("reaction", reactionSchema);

module.exports = Reaction;
