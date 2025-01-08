const PlatformModels = require("../models/PlatformModels");
const GameModels = require("../models/GameModels");

// Get all platforms
exports.platforms = async (req, res) => {
  try {
    const platforms = await PlatformModels.platforms();
    res.status(200).json({ status: "success", platforms: platforms });
  } catch (error) {
    res.status(500).json({ status: "error", error: error });
  }
};

// Get platform by id and related games
exports.platformById = async (req, res) => {
  const { id } = req.params;
  try {
    const platform = await PlatformModels.platformById(id);
    const games = await GameModels.GamesByPlatformId(id);
    res
      .status(200)
      .json({ status: "success", platform: platform, games: games });
  } catch (error) {
    res.status(500).json({ status: "error", error: error?.message });
  }
};

// Create a platform
exports.createPlatform = async (req, res) => {
  const { name } = req.body;
  try {
    await PlatformModels.createPlatform(name);
    res.status(201).json({ status: "success", message: "Platform created" });
  } catch (error) {
    res.status(500).json({ status: "error", error: error });
  }
};

// Update a platform
exports.updatePlatform = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    await PlatformModels.updatePlatform(id, name);
    res.status(200).json({ status: "success", message: "Platform updated" });
  } catch (error) {
    res.status(500).json({ status: "error", error: error });
  }
};

// Delete a platform
exports.deletePlatform = async (req, res) => {
  const { id } = req.params;
  try {
    await PlatformModels.deletePlatform(id);
    res.status(200).json({ status: "success", message: "Platform deleted" });
  } catch (error) {
    res.status(500).json({ status: "error", error: error });
  }
};
