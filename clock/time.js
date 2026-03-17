const time = document.getElementById("time");
const day = document.getElementById("day");
const date = document.getElementById("date");
const greeting = document.getElementsByTagName("h1")[0];

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// Show current day and date
function showDayDate() {
    const current = new Date();
    day.innerText = days[current.getDay()];
    date.innerText = current.toLocaleDateString();
}

// Show greeting based on current hour
function displayGreeting() {
    const current = new Date();
    const hour = current.getHours();

    if(hour >= 5 && hour < 12){
        greeting.innerText = "Good Morning";
    }
    else if(hour >= 12 && hour < 18){
        greeting.innerText = "Good Afternoon";
    }
    else if(hour >= 18 && hour <= 21){
        greeting.innerText = "Good Evening";
    }
    else{
        greeting.innerText = "Good Night";
    }
}

// Show current time
function showTime() {
    const current = new Date();
    time.innerText = current.toLocaleTimeString();
}

// Initial display
showTime();
showDayDate();
displayGreeting();

// Update time every second
setInterval(showTime, 1000);

// Update greeting every minute
setInterval(displayGreeting, 60000);
