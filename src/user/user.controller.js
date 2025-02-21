import User from './user.model.js'

export const updateUserProfile = async (req, res) => {
    try {
        const { userId } = req.params;
        const updates = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

      
        delete updates.role;
        delete updates.password;

        const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });

        return res.send({ message: 'Profile updated successfully', updatedUser });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error updating user profile', err });
    }
}