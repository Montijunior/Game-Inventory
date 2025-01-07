const pool = require("../db");

// Get all developers
exports.getDevelopers = async () => {
  try {
    const developers = await pool.query("SELECT * FROM developers");
    return developers.rows;
  } catch (error) {
    console.error(error.message);
  }
};

// Get a developer by id
exports.getDeveloperById = async (id) => {
  try {
    const developer = await pool.query(
      "SELECT name, country FROM developers WHERE id = $1",
      [id]
    );
    return developer.rows[0];
  } catch (error) {
    console.error(error.message);
  }
};

// Create a developer
exports.createDeveloper = async (name, country) => {
  try {
    await pool.query("INSERT INTO developers (name, country) VALUES ($1, $2)", [
      name,
      country,
    ]);
  } catch (error) {
    console.error(error.message);
  }
};

// Update a developer by id
exports.updateDeveloperById = async (id, name, country) => {
  try {
    await pool.query(
      "UPDATE developers SET name = $1, country = $2 WHERE id = $3",
      [name, country, id]
    );
  } catch (error) {
    console.error(error.message);
  }
};

// Delete a developer by id
exports.deleteDeveloperById = async (id) => {
  try {
    await pool.query("DELETE FROM developers WHERE id = $1", [id]);
  } catch (error) {
    console.error(error.message);
  }
};
