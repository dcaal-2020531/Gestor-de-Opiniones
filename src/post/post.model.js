import {model, Schema } from "mongoose";

const postSchema = Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
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
        user:{
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true,'User is Required']
        }
    }
)


export default model('Post', postSchema)
