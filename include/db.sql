CREATE database fly;
use fly;

CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    f_name VARCHAR(50),
    l_name VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    PASSWORD VARCHAR(100),
    phoneNumber VARCHAR(15),
    cin VARCHAR(10),
    gender VARCHAR(1),
    birthday DATE,
    token VARCHAR(230),
    isVerified BOOLEAN,
    photoProfile VARCHAR(230),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
)ENGINE = InnoDB;



CREATE TABLE passport(
    id INT PRIMARY KEY AUTO_INCREMENT,
    pp_nationality VARCHAR(50),
    pp_date_of_issuel DATE,
    pp_date_of_expiry DATE,
    uniqueNumber VARCHAR(230) UNIQUE,
    cin VARCHAR(10),
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES users(id)
)ENGINE = InnoDB;

CREATE TABLE card(
    id INT PRIMARY KEY AUTO_INCREMENT,
    c_date_expiry DATE,
    c_pin INT,
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES users(id)
)ENGINE = InnoDB; 

CREATE TABLE flight(
    id INT PRIMARY KEY AUTO_INCREMENT,
    leaving_from VARCHAR(255),
    going_to VARCHAR(255),
    type VARCHAR(255),
    departing VARCHAR(255),
    _returning VARCHAR(50) DEFAULT 'null',
    class VARCHAR(255),
    seats INT,
    price INT
)ENGINE = InnoDB; 

CREATE TABLE admin(
    id INT PRIMARY KEY AUTO_INCREMENT,
    f_name VARCHAR(50),
    l_name VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    PASSWORD VARCHAR(100)
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS reservation (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  flight_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (flight_id) REFERENCES flight (id) ON DELETE CASCADE
) ENGINE = InnoDB;