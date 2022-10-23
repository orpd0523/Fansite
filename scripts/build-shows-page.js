document.addEventListener("DOMContentLoaded", (event) => {
    console.log('window loaded.')
    renderConcerts()
});



const concerts = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 21 2021 ",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA"
    },
];

function displayConcert(concertObject) {
    let display = document.querySelector(".shows__list");

    let container = document.createElement("div");
    display.appendChild(container);

    let dateLabel = document.createElement("p");
    dateLabel.innerText = 'DATE';
    container.appendChild(dateLabel);

    let date = document.createElement("p");
    date.innerText = concertObject.date;
    container.appendChild(date);

    let venueLabel = document.createElement("p");
    venueLabel.innerText = 'VENUE';
    container.appendChild(venueLabel);

    let venue = document.createElement("p");
    venue.innerText = concertObject.venue;
    container.appendChild(venue);

    let locationLabel = document.createElement("p");
    locationLabel.innerText = 'LOCATION';
    container.appendChild(locationLabel);

    let location = document.createElement("p");
    location.innerText = concertObject.location;
    container.appendChild(location);

    let button = document.createElement("button");
    button.innerText = 'BUY TICKETS';
    container.appendChild(button);
}

function renderConcerts() {
    concerts.forEach((concert) => {
        displayConcert(concert);
    });
}