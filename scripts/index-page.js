const BASE_URL = "http://project-1-api.herokuapp.com/"
const apikey = "?api_key=d10b7838-1997-4fb9-bf66-f0cdd4a312ba"

document.addEventListener("DOMContentLoaded", (event) => {
  getComments();
  const commentForm = document.querySelector(".comments__form");
  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const commentObject = {
      name: event.target[0].value,
      comment: event.target[1].value,
      timestamp: now(),
    };

    comments.push(commentObject);
    commentForm.reset();
    clearComments();
    getComments();
    
  });
});

function displayComment(commentObject) {
  const display = document.querySelector(".comments__display");

  const card = document.createElement("div");
  card.className = 'comments__card';
  display.appendChild(card);

  const cardAside = document.createElement("div");
  cardAside.className = 'comments__card-aside';
  card.appendChild(cardAside);

  const avatar = document.createElement("img");
  avatar.className = 'comments__card-aside-avatar';
  cardAside.appendChild(avatar);

  const cardMain = document.createElement("div");
  cardMain.className = 'comments__card-main';
  card.appendChild(cardMain);

  const cardMainTop = document.createElement("div");
  cardMainTop.className = 'comments__card-main-top';
  cardMain.appendChild(cardMainTop);

  const user = document.createElement("p");
  user.innerText = commentObject.name;
  user.className = 'comments__card-main-top-user';
  cardMainTop.appendChild(user);

  const spacer = document.createElement("div")
  spacer.className = 'comments__card-main-top-spacer';
  cardMainTop.appendChild(spacer);

  const date = document.createElement("p");
  date.innerText = commentObject.timestamp;
  date.className = 'comments__card-main-top-date';
  cardMainTop.appendChild(date);

  const message = document.createElement("p");
  message.innerText = commentObject.comment;
  message.className = 'comments__card-main-body';
  cardMain.appendChild(message);
}

function renderComments(comments) {
  comments.forEach((comment) => {
    displayComment(comment);
  });
}

function getComments(){
  axios.get(BASE_URL + "comments"+ apikey )
  .then((response) => {renderComments(response.data)}); 
}

function clearComments() {
  const display = document.querySelector(".comments__display");
  display.innerHTML = "";
}

function now() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return twoDigit(month) + "/" + twoDigit(day) + "/" + year;
}

function twoDigit(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}
