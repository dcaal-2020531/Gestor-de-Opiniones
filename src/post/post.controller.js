import Post from "./post.model.js";

export const save = async(req, res) => {
    try {
        const data = req.body
        const post = new Post(data)
        await post.save()
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
                message: 'General error when Posting',
                err
            }
        )
    }
}

export const updatePosts = async (req, res) => {
    try {
        const { postId } = req.params;
        const updates = req.body;

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).send({ message: 'Post not found' });
        }

        const updatedPost = await Post.findByIdAndUpdate(postId, updates, { new: true });

        return res.send({ message: 'Post updated successfully', updatedPost });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error updating Post', err });
    }
}

export const deletePost = async (req, res) => {
    try {
        const { postId } = req.params;

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).send({ message: 'Post not found' });
        }

        await Post.findByIdAndDelete(postId);

        return res.send({ message: 'Post deleted successfully' });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error deleting Post', err });
    }
}