INSERT INTO burgers (burger_name) VALUES ('Krabby Patty');
INSERT INTO burgers (burger_name) VALUES ('Deluxe Krabby Patty');
INSERT INTO burgers (burger_name) VALUES ('Double Triple Bossy Deluxe');
INSERT INTO burgers (burger_name) VALUES ('Crying Johnny');
INSERT INTO burgers (burger_name) VALUES ('All-Bun Patty');
INSERT INTO burgers (burger_name) VALUES ('Krusty Dog');
INSERT INTO burgers (burger_name) VALUES ('Flabby Patty');

UPDATE burgers 
SET devoured = true
WHERE id = 4;