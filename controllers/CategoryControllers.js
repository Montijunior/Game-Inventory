const CategoryModels = require("../models/CategoryModels");

// Get all categories
exports.Categories = async (req, res) => {
  try {
    const categories = await CategoryModels.getCategories();
    res.json(categories);
  } catch (error) {
    console.error(error.message);
  }
};

// Get a category by id
exports.Category = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await CategoryModels.getCategoryById(id);
    res.json(category);
  } catch (error) {
    console.error(error.message);
  }
};

// Create a category
exports.CreateCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  try {
    const category = await CategoryModels.createCategory(name);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a category
exports.UpdateCategoryById = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  try {
    const category = await CategoryModels.updateCategoryById(id, name);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a category
exports.DeleteCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    await CategoryModels.deleteCategoryById(id);
    res.status(204).json({ message: "Category deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
