DROP DATABASE IF EXISTS books_db;
-- Create two new databases --
DROP DATABASE IF EXISTS sample_db;
CREATE DATABASE books_db;

-- Use inventory_db --
USE books_db;

-- See database in use --
SELECT DATABASE();