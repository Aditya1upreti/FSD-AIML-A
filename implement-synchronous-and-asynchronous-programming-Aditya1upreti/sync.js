function login(username, password) {
    if (username === "aditya" && password === "1234") {
        console.log(`Welcome back, ${username}!`);
        return true;
    } else {
        console.log("Invalid username or password.");
        return false;
    }
}

function getData() {
    console.log("Getting your data...");
    // simulate heavy task (blocking)
    for (let i = 0; i < 1e7; i++) {} 
    return ["Mail", "Notifications", "Profile Info"];
}

function displayData(data) {
    console.log("Here is your data:", data);
}

function logout(username) {
    console.log(`Goodbye, ${username}. You have been logged out.`);
}

if (login("aditya", "1234")) {
    let data = getData();
    displayData(data);
    logout("aditya");
}
