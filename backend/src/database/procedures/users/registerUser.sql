CREATE OR ALTER PROCEDURE registerUser(
    @id VARCHAR(255),
    @FirstName VARCHAR(255),
    @LastName VARCHAR(255),
    @phone_number VARCHAR(20),
    @email VARCHAR(255),
    @password VARCHAR(255),
    @user_image VARCHAR(255),
    @createdAt VARCHAR(255)

)
AS
BEGIN
    INSERT INTO users(id, FirstName,LastName, phone_number,email,password,user_image,createdAt)
    VALUES(@id, @FirstName, @LastName, @phone_number,@email,@password, @user_image, @createdAt)
END