function login(event) {
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;
    const storedItem = localStorage.getItem(userName);
    const storedObj = JSON.parse(storedItem);
    if(!storedItem || storedObj.password != password) {
        alert("Your username or passowrd is wrong. Please try again.")
        event.stopPropagation();
        event.preventDefault();
    }else {
        sessionStorage.setItem('currentUser', userName);
    }
}

function signUp(event) {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;
    const question = document.getElementById("question").value;
    const answer = document.getElementById("answer").value;
    const confrimPassword = document.getElementById("confrimPassword").value;
    if(password == confrimPassword) {
        const userObject = {
            firstName,
            lastName,
            password,
            userName,
            question,
            answer
        }
        localStorage.setItem(userName, JSON.stringify(userObject));
        event.stopPropagation();
        event.preventDefault();
        window.location.href = 'login.html';
    }else {
        alert("Your passowrd and confirm password doesn't match. Please try again.")
    }
}