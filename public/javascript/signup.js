async function signupFormHandler(event) {
    event.preventDefault();
    
    const first_name = document.querySelector('#first_name').value.trim();
    const last_name = document.querySelector('#last_name').value.trim();
    const username = first_name + last_name;
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const repeat_password = document.querySelector('#repeat-password-signup').value.trim();
    const user_role = "admin";

    if (password === repeat_password){
        if (username && email && password) {
            const response = await fetch('/api/users', {
                method: 'post',
                body: JSON.stringify({
                    user_role,
                    username,
                    email,
                    password
                }),
                headers: { 'Content-Type': 'application/json' }
            });
        
            // check the response status
            if (response.ok) {
                console.log('success');
                document.location.replace('/');
            } else {
                alert(response.statusText);
            }
        }
    } else {
        alert("Passwords do not match. Please try again");
    }
}

document.querySelector('#signup_form').addEventListener('submit', signupFormHandler);