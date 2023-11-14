function getUserDetails() {
    debugger
    const user = sessionStorage.getItem('currentUser');
    if(user) {
        const storedObj = JSON.parse(localStorage.getItem(user));
        const name = document.getElementById("name");
        debugger
        name.innerHTML = 'Name:' + storedObj.firstName + ' ' + storedObj.lastName;
        const userDetails = document.getElementById("user");
        userDetails.innerHTML = 'Name:' + storedObj.firstName + ' ' + storedObj.lastName;
        const userName = document.getElementById("userName");
        userName.innerHTML = 'Username: ' + storedObj.userName;
        const question = document.getElementById("question");
        question.innerHTML = 'Security question: ' + storedObj.question;
        const answer = document.getElementById("answer");
        answer.innerHTML = 'Security answer: ' + storedObj.answer;
    }
}

getUserDetails();