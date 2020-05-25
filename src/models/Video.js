import mongoose from "mongoose";

const VideoSchema= new mongoose.Schema({
    fileUrl: {
        type: String,
        required: 'file url is required'
    },
    title :{
        type: String,
        required: 'title is require'
    },
    description: String,
    view: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Comment"
    }]
});

const model= mongoose.model("video", VideoSchema);
export default model;