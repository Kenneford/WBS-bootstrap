# Table Creation 

CREATE TABLE users (
    id  SERIAL PRIMARY KEY,
    first_name varchar(255), 
    last_name varchar(255),
    age int
);

# Users creation 

INSERT INTO users (first_name, last_name, age) VALUES ('John', 'Doe', 18);

INSERT INTO users (first_name, last_name, age) VALUES ('Bob', 'Dylan', 30);

INSERT INTO users (first_name, last_name, age) VALUES ('Jane', 'Doe', 25);

# Display all (*) the users 
SELECT *
FROM users;

# Display all the users older than 18
SELECT *
FROM users
WHERE age > 18;

# Display all the users ordered by age (DESC)
SELECT *
FROM users
ORDER BY age DESC;

# Display all the users older than 18 AND named Doe
SELECT * 
FROM users
WHERE age > 18 
AND last_name = 'Doe';

# Display one user older than 17 AND named Doe
SELECt *
FROM users
WHERE age > 17
AND last_name = 'Doe'
Limit 1;
