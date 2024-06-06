CREATE OR ALTER PROCEDURE registerUser(
    @id VARCHAR(255),
    @FirstName VARCHAR(255),
    @LastName VARCHAR(255),
    @phone_number VARCHAR(255),
    @email VARCHAR(255),
    @password VARCHAR(255),
    @user_image VARCHAR (255),
    @project_id VARCHAR(255),
    @isAssignedProject VARCHAR(255)
)
AS
BEGIN
    INSERT INTO users(id, FirstName, LastName, phone_number, email, password, user_image, project_id, isAssignedProject)
    VALUES(@id, @FirstName, @LastName, @phone_number, @email, @password, @user_image, @project_id, @isAssignedProject)
END