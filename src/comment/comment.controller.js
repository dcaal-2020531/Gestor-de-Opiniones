import Comment from "./comment.model.js";


export const save = async(req, res) => {
    try {
        const data = req.body
        const comment = new Comment(data)
        await comment.save()
        return res.send(
            {
                success: true,
                message: `Posted successfully`
            }
        )
    } catch (err) {
        console.error(err)
        return res.status(500).send(
            {
                success: false,
                message: 'General error when Posting Comment',
                err
            }
        )
    }
}

export const updateComments = async (req, res) => {
    try {
        const { commentId } = req.params;
        const updates = req.body;

        const comment = await Comment.findById(commentId);
        if (!comment) {
            return res.status(404).send({ message: 'Comment not found' });
        }

        const updateComment = await Product.findByIdAndUpdate(commentId, updates, { new: true });

        return res.send({ message: 'Comentary updated successfully', updateComment });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error updating Comment', err });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { commentId } = req.params;

        const comment = await Comment.findById(commentId);
        if (!comment) {
            return res.status(404).send({ message: 'Comment not found' });
        }

        await Comment.findByIdAndDelete(commentId);

        return res.send({ message: 'Comment deleted successfully' });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error deleting you Comment', err });
    }
}