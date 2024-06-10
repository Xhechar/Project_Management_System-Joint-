-- CREATE DATABASE ProjectManagement;


-- changes due to testing admin side... (temporary)*


CREATE TABLE users(
            id VARCHAR(255) PRIMARY KEY,
            FirstName VARCHAR(255) NOT NULL,
            LastName VARCHAR(255) NOT NULL,
            phone_number VARCHAR(20) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            user_image VARCHAR(255) NOT NULL,
            project_id VARCHAR(255),
            isAssignedProject VARCHAR(25)
          )

SELECT * FROM users;

-- DROP TABLE users_table;

