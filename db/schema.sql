-- phpmyadmin-ctl install

-- DROP DATABASE IF EXISTS burgers_db;
-- CREATE DATABASE burgers_db;

-- USE burgers_db;

CREATE TABLE burgers(
id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(30),
devoured BOOLEAN DEFAULT false,
date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY(id)
),

-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.
-- date: a TIMESTAMP.

