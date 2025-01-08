const pool = require("../db");

// Get all games
exports.Games = async () => {
  try {
    const query =
      "SELECT games.id AS id, games.name AS name, games.description AS description, categories.name AS category_name, developers.name AS developer_name FROM games JOIN categories ON games.category_id = categories.id JOIN developers ON games.developer_id = developers.id";
    const games = await pool.query(query);
    return games.rows;
  } catch (error) {
    console.error(error.message);
  }
};

// Get a game by id
exports.Game = async (id) => {
  try {
    const query =
      "SELECT games.id AS id, games.name AS name, games.description AS description, categories.name AS category_name, developers.name AS developer_name FROM games JOIN categories ON games.category_id = categories.id JOIN developers ON games.developer_id = developers.id WHERE games.id = $1";
    const game = await pool.query(query, [id]);
    return game.rows[0];
  } catch (error) {
    console.error(error.message);
  }
};

// Get all games by developer with id
exports.GamesByDeveloperId = async (developer_id) => {
  try {
    const query = "SELECT * FROM games WHERE developer_id = $1";
    const games = await pool.query(query, [developer_id]);
    return games.rows;
  } catch (error) {
    console.error(error.message);
  }
};

// Get all games by platform with id
// Come back here
exports.GamesByPlatformId = async (platform_id) => {
  try {
    const query = "SELECT * FROM games WHERE platform_id = $1";
    const games = await pool.query(query, [platform_id]);
    return games.rows;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

// Create a game
exports.CreateGame = async (name, description, category_id, developer_id) => {
  try {
    const query =
      "INSERT INTO games (name, description, category_id, developer_id) VALUES ($1, $2, $3, $4)";
    await pool.query(query, [name, description, category_id, developer_id]);
  } catch (error) {
    console.error(error.message);
  }
};

// Update a game
exports.UpdateGameById = async (
  id,
  name,
  description,
  category_id,
  developer_id
) => {
  try {
    const query =
      "UPDATE games SET name = $1, description = $2, category_id = $3, developer_id = $4 WHERE id = $5";
    await pool.query(query, [name, description, category_id, developer_id, id]);
  } catch (error) {
    console.error(error.message);
  }
};

// Delete a game
exports.DeleteGameById = async (id) => {
  try {
    const query = "DELETE FROM games WHERE id = $1";
    await pool.query(query, [id]);
  } catch (error) {
    console.error(error.message);
  }
};
