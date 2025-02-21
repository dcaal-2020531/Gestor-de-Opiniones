import Category from "./category.model.js";

export const save = async(req, res) => {
    try {
        const data = req.body
        const category = new Category(data)
        await category.save()
        return res.send(
            {
                success: true,
                message: `Category created successfully`
            }
        )
    } catch (err) {
        console.error(err)
        return res.status(500).send(
            {
                success: false,
                message: 'General error when creating category',
                err
            }
        )
    }
}

export const updateCategories = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const updates = req.body;

        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).send({ message: 'Category not found' });
        }

        const updatedCategory = await Category.findByIdAndUpdate(categoryId, updates, { new: true });

        return res.send({ message: 'Category updated successfully', updatedCategory });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error updating category', err });
    }
}

export const deleteCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;

        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).send({ message: 'Category not found' });
        }

        await Category.findByIdAndDelete(categoryId);

        return res.send({ message: 'Category deleted successfully' });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error deleting category', err });
    }
}
