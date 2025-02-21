//Modelo de usuario

import { Schema, model } from 'mongoose'

const commentSchema = Schema(
    {  
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        text: {
            type: String,
            required: [true, 'Text is required'],
            maxLength: [100, `Can't be overcome 100 characters`],
        },
        post:{
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }

    }
)

export default model('Comment', commentSchema)