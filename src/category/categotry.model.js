import { model,Schema } from "mongoose";

const categorySchema = Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            maxLength: [15, `Can't be overcome 15 characters`],
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
            maxLength: [20, `Can't be overcome 20 characters`],
        }
    }
)


export default model('Category', categorySchema)