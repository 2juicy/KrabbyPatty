DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(30) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO burgers (burger_name) VALUES ('Krabby Patty');
INSERT INTO burgers (burger_name) VALUES ('Deluxe Krabby Patty');
INSERT INTO burgers (burger_name) VALUES ('Double Triple Bossy Deluxe');
INSERT INTO burgers (burger_name) VALUES ('Crying Johnny');
INSERT INTO burgers (burger_name) VALUES ('All-Bun Patty');
INSERT INTO burgers (burger_name) VALUES ('Krusty Dog');
INSERT INTO burgers (burger_name) VALUES ('Flabby Patty');