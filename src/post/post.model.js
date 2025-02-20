import {model, Schema } from "mongoose";

const postSchema = Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        principalText: {
            type: String,
            required: [true, 'Text  is required'],
            maxLength: [300, `Can't be overcome 300 characters`],
        },
        comment:{
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    }
)


export default model('Post', postSchema)