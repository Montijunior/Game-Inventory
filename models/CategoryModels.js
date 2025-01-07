const pool = require("../db");

// Get all categories
exports.getCategories = async () => {
  try {
    const categories = await pool.query("SELECT name FROM categories");
    return categories.rows;
  } catch (error) {
    console.error(error.message);
  }
};

// Get a category by name
exports.getCategoryByName = async (name) => {
  try {
    const category = await pool.query(
      "SELECT * FROM categories WHERE name = $1",
      [name]
    );
    return category.rows[0];
  } catch (error) {
    console.error(error.message);
  }
};
// Get a category by id
exports.getCategoryById = async (id) => {
  try {
    const category = await pool.query(
      "SELECT * FROM categories WHERE id = $1",
      [id]
    );
  } catch (error) {}
};
// Create a new category
exports.createCategory = async (name) => {
  try {
    await pool.query("INSERT INTO categories (name) VALUES($1)", [name]);
  } catch (error) {
    console.error(error.message);
  }
};

// Update a category by id
exports.updateCategoryById = async (id, name) => {
  try {
    await pool.query("UPDATE categories SET name = $1 WHERE id= $2", [
      name,
      id,
    ]);
  } catch (error) {
    console.error(error.message);
  }
};

// Delete a category by id
exports.deleteCategoryById = async (id) => {
  try {
    await pool.query("DELETE FROM categories WHERE id = $1", [id]);
  } catch (error) {
    console.error(error.message);
  }
};

// Delete all categories (for admins only)
exports.deleteAllCategories = async () => {
  try {
    await pool.query("DELETE FROM categories");
  } catch (error) {
    console.error(error.message);
  }
};
