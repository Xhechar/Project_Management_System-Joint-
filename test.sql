use ManagementSystem

CREATE  TABLE users (
  id VARCHAR(255) PRIMARY KEY,
  FirstName VARCHAR(255) NOT NULL,
  LastName VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  user_image VARCHAR(255) NOT NULL,
  isAssignedProject VARCHAR(255) DEFAULT 0,
  role VARCHAR(50) DEFAULT 'user',
  isCreated VARCHAR(50) DEFAULT 0,
  createdAt VARCHAR(255) NOT NULL,
  project_id VARCHAR(255),
  FOREIGN KEY (project_id) REFERENCES projects(project_id)
  );