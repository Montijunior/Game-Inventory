const pool = require("../db");

// Get all platforms
exports.platforms = async () => {
  try {
    const platforms = await pool.query("SELECT name FROM platforms");
    return platforms.rows;
  } catch (error) {
    console.error(error.message);
  }
};

// Get platform by id
exports.platformById = async (id) => {
  try {
    const platform = await pool.query("SELECT * FROM platforms WHERE id = $1", [
      id,
    ]);
    return platform.rows[0];
  } catch (error) {
    console.error(error);
  }
};

// Create a new platform
exports.createPlatform = async (name) => {
  try {
    const newPlatform = await pool.query(
      "INSERT INTO platforms (name) VALUES ($1)",
      [name]
    );
    return newPlatform.rows[0];
  } catch (error) {
    console.error(error);
  }
};

// Update a platform
exports.updatePlatform = async (id, name) => {
  try {
    await pool.query("UPDATE platforms SET name = $1 WHERE id = $2", [
      name,
      id,
    ]);
  } catch (error) {
    console.error(error);
  }
};

// Delete a platform
exports.deletePlatform = async (id) => {
  try {
    await pool.query("DELETE FROM platforms WHERE id = $1", [id]);
  } catch (error) {
    console.error(error);
  }
};
