const DeveloperController = require("../controllers/DeveloperControllers");
const { Router } = require("express");
const router = Router();

// Get all developers
router.get("/", DeveloperController.Developers);

// Get a developer by id and all games by developer with id
router.get("/:id", DeveloperController.Developer);

// Create a developer
router.post("/create", DeveloperController.CreateDeveloper);

// Update a developer
router.put("/:id/update", DeveloperController.UpdateDeveloperById);

// Delete a developer
router.delete("/:id/delete", DeveloperController.DeleteDeveloperById);

module.exports = router;
