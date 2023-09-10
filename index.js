// Function to update date and time
function updateDateTime() {
  const currentTimeElement = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );

  const currentDayOfWeekElement = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );

  const now = new Date();

  // To show the current time
  const formattedTime = now.toLocaleTimeString();
  currentTimeElement.textContent = "Current Time: 👉 " + formattedTime;

  //To show the day of the week
  const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });
  currentDayOfWeekElement.textContent = "Day of the Week: 👉" + dayOfWeek;
}

// To Update date and time every second
setInterval(updateDateTime, 1000);

// To  Initialize date and time
updateDateTime();
