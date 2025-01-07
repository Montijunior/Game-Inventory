const DeveloperModel = require("../models/DeveloperModels");
const GameModel = require("../models/GameModels");

// Get all developers
exports.Developers = async (req, res) => {
  try {
    const developers = await DeveloperModel.getDevelopers();
    res.status(200).json(developers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a developer by id and all games by developer with id
exports.Developer = async (req, res) => {
  const { id } = req.params;
  try {
    const developer = await DeveloperModel.getDeveloperById(id);
    const games = await GameModel.GamesByDeveloperId(id);
    res.status(200).json({ developer, games });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a developer
exports.CreateDeveloper = async (req, res) => {
  const { name, country } = req.body;
  if (!name || !country) {
    return res.status(400).json({ message: "Name and country are required" });
  }
  try {
    const developer = await DeveloperModel.createDeveloper(name, country);
    res.status(201).json(developer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a developer
exports.UpdateDeveloperById = async (req, res) => {
  const { id } = req.params;
  const { name, country } = req.body;
  if (!name || !country) {
    return res.status(400).json({ message: "Name and country are required" });
  }
  try {
    const developer = await DeveloperModel.updateDeveloperById(
      id,
      name,
      country
    );
    res.status(200).json(developer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a developer
exports.DeleteDeveloperById = async (req, res) => {
  const { id } = req.params;
  try {
    await DeveloperModel.deleteDeveloperById(id);
    res.status(204).json({ message: "Developer deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
