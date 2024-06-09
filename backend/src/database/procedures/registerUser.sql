CREATE PROCEDURE registerUser
    @id VARCHAR(50),
    @FirstName NVARCHAR(100),
    @LastName NVARCHAR(100),
    @phone_number NVARCHAR(20),
    @email NVARCHAR(100),
    @password NVARCHAR(100),
    @user_image NVARCHAR(100),
    @project_id NVARCHAR(50),
    @isAssignedProject NVARCHAR(50)
AS
BEGIN
    INSERT INTO Users (id, FirstName, LastName, phone_number, email, password, user_image, project_id, isAssignedProject)
    VALUES (@id, @FirstName, @LastName, @phone_number, @email, @password, @user_image, @project_id, @isAssignedProject)
END

