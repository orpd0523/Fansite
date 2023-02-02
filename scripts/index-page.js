const BASE_URL = "https://us-central1.gcp.data.mongodb-api.com/app/fansite-qwkxw/endpoint/";
const apikey = "?api_key=d10b7838-1997-4fb9-bf66-f0cdd4a312ba";
const display = document.querySelector(".comments__display");
const commentForm = document.querySelector(".comments__form");
let comments = [];

document.addEventListener("DOMContentLoaded", (event) => {
  getComments();

  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const commentObject = {
      name: event.target.username.value,
      comment: event.target.comment.value,
    };

    postComment(commentObject);
    commentForm.reset();
  });
});

function displayComment(commentObject) {
  const card = document.createElement("div");
  card.classList.add("comments__card");
  display.appendChild(card);

  const cardAside = document.createElement("div");
  cardAside.classList.add("comments__card-aside");
  card.appendChild(cardAside);

  const avatar = document.createElement("img");
  avatar.classList.add("comments__card-aside-avatar");
  cardAside.appendChild(avatar);

  const cardMain = document.createElement("div");
  cardMain.classList.add("comments__card-main");
  card.appendChild(cardMain);

  const cardMainTop = document.createElement("div");
  cardMainTop.classList.add("comments__card-main-top");
  cardMain.appendChild(cardMainTop);

  const user = document.createElement("p");
  user.innerText = commentObject.name;
  user.classList.add("comments__card-main-top-user");
  cardMainTop.appendChild(user);

  const spacer = document.createElement("div");
  spacer.classList.add("comments__card-main-top-spacer");
  cardMainTop.appendChild(spacer);

  const date = document.createElement("p");
  date.innerText = timeStamp(commentObject.timestamp);
  date.classList.add("comments__card-main-top-date");
  cardMainTop.appendChild(date);

  const message = document.createElement("p");
  message.innerText = commentObject.comment;
  message.classList.add("comments__card-main-body");
  cardMain.appendChild(message);
}

function renderComments(comments) {
  comments.forEach((comment) => {
    displayComment(comment);
    console.log(comment)
  });
}

function getComments() {
  axios.get(BASE_URL + "comments" + apikey).then((response) => {
    comments = response.data.sort((a, b) => b.timestamp - a.timestamp);
    renderComments(comments);
  });
}

function postComment(comment) {
  axios.post(BASE_URL + "comments" + apikey, comment).then((response) => {
    comments = [response.data, ...comments];
    clearComments();
    renderComments(comments);
  });
}

function clearComments() {
  display.innerHTML = "";
}

function timeStamp(date) {
  let d = new Date(date);
  let year = d.getUTCFullYear();
  let month = d.getUTCMonth() + 1;
  let day = d.getUTCDate();
  return twoDigit(month) + "/" + twoDigit(day) + "/" + year;
}

function twoDigit(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}
