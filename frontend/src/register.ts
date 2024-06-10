let user_firstname = document.getElementById("firstname") as HTMLInputElement;
let user_lastname = document.getElementById("lastname") as HTMLInputElement;
let user_image = document.getElementById("image") as HTMLInputElement; // Assuming this is now a text input for URL
let user_phonenumber = document.getElementById("phonenumber") as HTMLInputElement;
let user_email = document.getElementById("email") as HTMLInputElement;
let user_password = document.getElementById("password") as HTMLInputElement;

let registrationForm = document.getElementById("registrationForm") as HTMLFormElement;

registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Type casting to access 'value' property
    let firstname = user_firstname.value.trim();
    let lastname = user_lastname.value.trim();
    let phone = user_phonenumber.value.trim();
    let email = user_email.value.trim();
    let password = user_password.value.trim();
    let image = user_image.value.trim(); // Getting the image URL as a string

    let user = firstname !== '' && lastname !== '' && image !== '' && phone !== '' && email !== '' && password !== '';

    if (user) {
        let promise = new Promise<{ error: string, message: string }>((resolve, reject) => {
            fetch('http://localhost:5300/users/create', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    FirstName: firstname, // Adjusted field name
                    LastName: lastname,   // Adjusted field name
                    phone_number: phone,  // Adjusted field name
                    email: email,         // Adjusted field name
                    password: password,   // Adjusted field name
                    user_image: image     // Adjusted field name
                })
            })
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
        });

        promise.then((res) => {
            console.log(res.message);
        }).catch(error => {
            console.error('Error:', error);
        });
    }
});
