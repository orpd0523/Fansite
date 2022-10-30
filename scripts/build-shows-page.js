const BASE_URL = "http://project-1-api.herokuapp.com/"
const apikey = "?api_key=d10b7838-1997-4fb9-bf66-f0cdd4a312ba"
const display = document.querySelector(".shows__list");
let selected = false;

document.addEventListener("DOMContentLoaded", (event) => {getShowDates();
});

function displayConcert(concertObject) {
  const cardDefaultClass = "shows__card";
  const cardClickedClass = cardDefaultClass + "--selected";

  const card = document.createElement("div");
  card.classList.add(cardDefaultClass);
  display.appendChild(card);

  card.addEventListener("click", (event) => {
    if (selected === true ){
      const previouslyClicked = document.querySelector("." + cardClickedClass);
      previouslyClicked.classList.remove(cardClickedClass);
    } else {
      selected = true
    }
    card.classList.add(cardClickedClass);
    
  });

  const dateCol = document.createElement("div");
  dateCol.classList.add("shows__card-col");
  card.appendChild(dateCol);

  const dateLabel = document.createElement("small");
  dateLabel.innerText = "DATE";
  dateLabel.classList.add("shows__card-col-label");
  dateCol.appendChild(dateLabel);

  const dateValue = document.createElement("p");
  console.log(concertObject.date)
  dateValue.innerText = formatDate(concertObject.date);
  dateValue.classList.add("shows__card-col-value", "shows__card-col-value--bold");
  dateCol.appendChild(dateValue);

  const venueCol = document.createElement("div");
  venueCol.classList.add("shows__card-col");
  card.appendChild(venueCol);

  const venueLabel = document.createElement("small");
  venueLabel.innerText = "VENUE";
  venueLabel.classList.add("shows__card-col-label");
  venueCol.appendChild(venueLabel);

  const venueValue = document.createElement("p");
  venueValue.innerText = concertObject.place;
  venueValue.classList.add("shows__card-col-value");
  venueCol.appendChild(venueValue);

  const locationCol = document.createElement("div");
  locationCol.classList.add("shows__card-col");
  card.appendChild(locationCol);

  const locationLabel = document.createElement("small");
  locationLabel.innerText = "LOCATION";
  locationLabel.classList.add("shows__card-col-label");
  locationCol.appendChild(locationLabel);

  const locationValue = document.createElement("p");
  locationValue.innerText = concertObject.location;
  locationValue.classList.add("shows__card-col-value");
  locationCol.appendChild(locationValue);

  const buttonCol = document.createElement("div");
  buttonCol.classList.add("shows__card-col", "shows__card-col--button");
  card.appendChild(buttonCol);

  const button = document.createElement("button");
  button.innerText = "BUY TICKETS";
  button.classList.add("shows__card-button");
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

function twoDigit(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

function formatDate (date){
  let d = new Date(date);
  let dayOfWeek = daysOfWeek[d.getUTCDay()];
  let day = twoDigit(d.getUTCDate());
  let month = months[d.getUTCMonth()];
  let year = d.getUTCFullYear();
  return `${dayOfWeek} ${month} ${day} ${year}`;
}
