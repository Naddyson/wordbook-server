import mongoose from "mongoose";

const Schema = mongoose.Schema;

const WordSchema = new Schema({
    word     : { type: String, required: true },
    translation      : { type: String, required: true },
    description     : { type: String },
    createdAt : { type: Date }
});

mongoose.model('Word', WordSchema);