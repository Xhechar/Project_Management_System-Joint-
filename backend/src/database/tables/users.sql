  IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'users')
        BEGIN
          CREATE TABLE users(
            id VARCHAR(255) PRIMARY KEY,
            FirstName VARCHAR(255) NOT NULL,
            LastName VARCHAR(255) NOT NULL,
            phone_number VARCHAR(20) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            user_image VARCHAR(255) NOT NULL,
            project_id VARCHAR(255),
            isAssignedProject VARCHAR(25),
            isActive BIT default 0
          )
        END
      
