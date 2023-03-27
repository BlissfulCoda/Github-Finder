import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const FeedbackSchema = new Schema({
  feedback: String,
});

const FeedbackModel = mongoose.model("Feedback", FeedbackSchema);

export default FeedbackModel;
