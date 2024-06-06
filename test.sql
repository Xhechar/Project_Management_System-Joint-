CREATE TABLE users(id VARCHAR(255) PRIMARY KEY,FirstName VARCHAR(255) NOT NULL, LastName VARCHAR(255) NOT NULL,
phone_number VARCHAR(20) NOT NULL,email VARCHAR(255) NOT NULL,password VARCHAR(255) NOT NULL,user_image VARCHAR(255) NOT NULL,FOREIGN KEY (project_id) REFERENCES projects(project_id),isAssignedProject varchar(25) )


use projectManagement