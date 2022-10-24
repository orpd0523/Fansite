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

    let card = document.createElement("div");
    card.className = 'shows__card';
    display.appendChild(card);

    let dateCol = document.createElement("div");
    dateCol.className = 'shows__card-col';
    card.appendChild(dateCol);

    let dateLabel = document.createElement("small");
    dateLabel.innerText = 'DATE';
    dateLabel.className = 'shows__card-col-label';
    dateCol.appendChild(dateLabel);

    let dateValue = document.createElement("p");
    dateValue.innerText = concertObject.date;
    dateValue.classList = 'shows__card-col-value  shows__card-col-value--bold';
    dateCol.appendChild(dateValue);


    let venueCol = document.createElement("div");
    venueCol.className = 'shows__card-col';
    card.appendChild(venueCol);

    let venueLabel = document.createElement("small");
    venueLabel.innerText = 'VENUE';
    venueLabel.className = 'shows__card-col-label';
    venueCol.appendChild(venueLabel);

    let venueValue = document.createElement("p");
    venueValue.innerText = concertObject.venue;
    venueValue.className = 'shows__card-col-value';
    venueCol.appendChild(venueValue);

    let locationCol = document.createElement("div");
    locationCol.className = 'shows__card-col';
    card.appendChild(locationCol);

    let locationLabel = document.createElement("small");
    locationLabel.innerText = 'LOCATION';
    locationLabel.className = 'shows__card-col-label';
    locationCol.appendChild(locationLabel);

    let locationValue = document.createElement("p");
    locationValue.innerText = concertObject.date;
    locationValue.className = 'shows__card-col-value';
    locationCol.appendChild(locationValue);

    let buttonCol = document.createElement("div");
    buttonCol.classList = 'shows__card-col shows__card-col--button';
    card.appendChild(buttonCol);

    let button = document.createElement("button");
    button.innerText = 'BUY TICKETS';
    button.className = 'shows__card-button';
    buttonCol.appendChild(button);
}

function renderConcerts() {
    concerts.forEach((concert) => {
        displayConcert(concert);
    });
}