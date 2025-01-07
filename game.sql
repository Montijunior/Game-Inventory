-- Create the categories table (genres)
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

-- Create the platforms table
CREATE TABLE platforms (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

-- Create the developers table
CREATE TABLE developers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    country VARCHAR(100) NOT NULL
);

-- Create the games table
CREATE TABLE games(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    release_date DATE NOT NULL,
    category_id INT REFERENCES categories(id) ON DELETE CASCADE,
    developer_id INT REFERENCES developers(id) ON DELETE CASCADE
);

-- Create the games_platforms table
CREATE TABLE games_platforms(
    game_id INT REFERENCES games(id) ON DELETE CASCADE,
    platform_id INT REFERENCES platforms(id) ON DELETE CASCADE,
    PRIMARY KEY (game_id, platform_id)
);

-- Create the games_developers table
CREATE TABLE games_developers(
    game_id INT REFERENCES games(id) ON DELETE CASCADE,
    developer_id INT REFERENCES developers(id) ON DELETE CASCADE,
    PRIMARY KEY (game_id, developer_id)
);
