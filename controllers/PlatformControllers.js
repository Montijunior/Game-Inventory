const PlatformModels = require("../models/PlatformModels");
const GameModel = require("../models/GameModels");

// Get all platforms
exports.Platforms = async (req, res) => {
  try {
    const platforms = await PlatformModels.getPlatforms();
    res.status(200).json(platforms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a platform by id and all games by platform with id
exports.getPlatformById = async (req, res) => {
  const { id } = req.params;
  try {
    const platforms = await PlatformModels.getPlatformById(id);
    const games = await GameModel.GamesByPlatformId(id);
    res.status(200).json({ platforms, games });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a platform
exports.CreatePlatform = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  try {
    const platform = await PlatformModels.createPlatform(name);
    res.status(201).json(platform);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a platform
exports.UpdatePlatformById = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  try {
    const platform = await PlatformModels.updatePlatformById(id, name);
    res.status(200).json(platform);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a platform
exports.DeletePlatformById = async (req, res) => {
  const { id } = req.params;
  try {
    await PlatformModels.deletePlatformById(id);
    res.status(204).json({ message: "Platform deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
