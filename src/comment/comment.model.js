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
        }

    }
)

export default model('Comment', commentSchema)