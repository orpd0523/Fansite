const BASE_URL = "http://project-1-api.herokuapp.com/"
const apikey = "?api_key=d10b7838-1997-4fb9-bf66-f0cdd4a312ba"

document.addEventListener("DOMContentLoaded", (event) => {getShowDates();
});

function displayConcert(concertObject) {
  const cardDefaultClass = "shows__card";
  let selected = false;
  const display = document.querySelector(".shows__list");

  const card = document.createElement("div");
  card.className = cardDefaultClass;
  display.appendChild(card);

  card.addEventListener("click", (event) => {
    selected = !selected;
    if (selected) {
      card.classList = cardDefaultClass + " " + cardDefaultClass + "--selected";
    } else {
      card.className = cardDefaultClass;
    }
  });

  const dateCol = document.createElement("div");
  dateCol.className = "shows__card-col";
  card.appendChild(dateCol);

  const dateLabel = document.createElement("small");
  dateLabel.innerText = "DATE";
  dateLabel.className = "shows__card-col-label";
  dateCol.appendChild(dateLabel);

  const dateValue = document.createElement("p");
  dateValue.innerText = concertObject.date;
  dateValue.classList = "shows__card-col-value  shows__card-col-value--bold";
  dateCol.appendChild(dateValue);

  const venueCol = document.createElement("div");
  venueCol.className = "shows__card-col";
  card.appendChild(venueCol);

  const venueLabel = document.createElement("small");
  venueLabel.innerText = "VENUE";
  venueLabel.className = "shows__card-col-label";
  venueCol.appendChild(venueLabel);

  const venueValue = document.createElement("p");
  venueValue.innerText = concertObject.venue;
  venueValue.className = "shows__card-col-value";
  venueCol.appendChild(venueValue);

  const locationCol = document.createElement("div");
  locationCol.className = "shows__card-col";
  card.appendChild(locationCol);

  const locationLabel = document.createElement("small");
  locationLabel.innerText = "LOCATION";
  locationLabel.className = "shows__card-col-label";
  locationCol.appendChild(locationLabel);

  const locationValue = document.createElement("p");
  locationValue.innerText = concertObject.date;
  locationValue.className = "shows__card-col-value";
  locationCol.appendChild(locationValue);

  const buttonCol = document.createElement("div");
  buttonCol.classList = "shows__card-col shows__card-col--button";
  card.appendChild(buttonCol);

  const button = document.createElement("button");
  button.innerText = "BUY TICKETS";
  button.className = "shows__card-button";
  buttonCol.appendChild(button);
}

function renderShowDates(showdates) {
    showdates.forEach((showdate) => {
    displayConcert(showdate);
  });
}

function getShowDates(){
  axios.get(BASE_URL + "showdates"+ apikey)
  .then((response) => {renderShowDates(response.data)}); 
}
