DROP DATABASE IF EXISTS beansdb;
CREATE DATABASE beansdb;

USE beansdb;

CREATE TABLE beans {
  _id UNIQUE AUTO_INCREMENT NOT NULL,
  category VARCHAR(50) NOT NULL,
  bean VARCHAR(550) NOT NULL,
  favorite BOOLEAN,
}

CREATE TABLE users {
  _id UNIQUE AUTO_INCREMENT NOT NULL,
  fname VARCHAR(50),
  lname VARCHAR(50),
  username VARCHAR(50),
  email VARCHAR(75),
  sessions INT,
  password VARCHAR(25)
}

INSERT INTO beans VALUES ('Self Love', 'My body is healthy; my mind is brilliant; my soul is tranquil.', false);
INSERT INTO users VALUES ('Alison', 'Sipos', 'LvlyAli', 'alison.sipos@icloud.com', 0, 'password');
