import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
  feedback: String,
  created: String,
});

const FeedbackModel = mongoose.model("Feedback", FeedbackSchema);

export default FeedbackModel;
