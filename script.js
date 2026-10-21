
function generateCalendar() {
    let year = parseInt(document.getElementById("year").value);
    let month = document.getElementById("month").value;

    if (!year || year < 1 || month === "") {
        alert("Please enter a valid year and select a month.");
        return;
    }

    month = parseInt(month);

    // Find the first day and number of days
    let firstDay = new Date(year, month, 1).getDay();
    let daysInMonth = new Date(year, month + 1, 0).getDate();

    let monthNames = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    document.getElementById("heading").innerText =
        monthNames[month] + " " + year;

    let output = "<table><tr>";

    let weekdays = [
        "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ];

    for (let day of weekdays) {
        output += "<th>" + day + "</th>";
    }

    output += "</tr><tr>";

    // Add empty cells before the first date
    for (let i = 0; i < firstDay; i++) {
        output += "<td></td>";
    }

    // Add dates to the calendar
    for (let date = 1; date <= daysInMonth; date++) {
        output += "<td>" + date + "</td>";

        if ((firstDay + date) % 7 === 0 &&
            date !== daysInMonth) {
            output += "</tr><tr>";
        }
    }

    output += "</tr></table>";

    document.getElementById("calendar").innerHTML = output;
}

function resetCalendar() {
    document.getElementById("year").value = "";
    document.getElementById("month").value = "";
    document.getElementById("heading").innerText = "";
    document.getElementById("calendar").innerHTML = "";
}
