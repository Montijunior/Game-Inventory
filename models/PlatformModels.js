const pool = require("../db");

// Get all platforms
exports.platforms = async () => {
  try {
    const query = "SELECT * FROM platforms";
    const platforms = await pool.query(query);
    return platforms.rows;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

// Get a platform by id
exports.platformById = async (id) => {
  try {
    const query = "SELECT * FROM platforms WHERE id = $1";
    const platform = await pool.query(query, [id]);
    return platform.rows[0];
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

// Create a platform
exports.createPlatform = async (name) => {
  try {
    const query = "INSERT INTO platforms (name) VALUES ($1)";
    await pool.query(query, [name]);
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

// Update a platform
exports.updatePlatform = async (id, name) => {
  try {
    const query = "UPDATE platforms SET name = $1 WHERE id = $2";
    await pool.query(query, [name, id]);
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

// Delete a platform
exports.deletePlatform = async (id) => {
  try {
    const query = "DELETE FROM platforms WHERE id = $1";
    await pool.query(query, [id]);
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
