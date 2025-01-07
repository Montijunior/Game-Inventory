const CategoryController = require("../controllers/CategoryControllers");
const { Router } = require("express");
const router = Router();

// Get all categories
router.get("/", CategoryController.Categories);

// Get a category by id
router.get("/:id", CategoryController.Category);

// Create a category
router.post("/create", CategoryController.CreateCategory);

// Update a category
router.put("/:id/update", CategoryController.UpdateCategoryById);

// Delete a category
router.delete("/:id/delete", CategoryController.DeleteCategoryById);

module.exports = router;
