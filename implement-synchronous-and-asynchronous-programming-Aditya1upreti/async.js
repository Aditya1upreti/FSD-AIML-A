function login(username, password) {
    if (username === "aditya" && password === "1234") {
        console.log(`Welcome back, ${username}!`);
        return true;
    } else {
        console.log("Invalid username or password.");
        return false;
    }
}

function getData(callback) {
    console.log("Fetching your data, please wait...");
    setTimeout(() => {
        let data = ["Mail", "Notifications", "Profile Info"];
        callback(data);
    }, 2000);
}

function displayData(data) {
    console.log("Here is your data:", data);
}

function logout(username) {
    console.log(`Goodbye, ${username}. You have been logged out.`);
}

if (login("aditya", "1234")) {
    getData((data) => {
        displayData(data);
        logout("aditya");
    });
}
