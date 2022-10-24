document.addEventListener("DOMContentLoaded", (event) => {
  renderComments();
  let commentForm = document.querySelector(".comments__form");
  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let commentObject = {
      name: event.target[0].value,
      comment: event.target[1].value,
      timestamp: now(),
    };

    comments.push(commentObject);
    commentForm.reset();
    clearComments();
    renderComments();
    
  });
});

let comments = [
  {
    name: "Miles Acosta",
    timestamp: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
  {
    name: "Emilie Beach",
    timestamp: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Connor Walton",
    timestamp: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
];

function displayComment(commentObject) {
  let display = document.querySelector(".comments__display");

  let card = document.createElement("div");
  card.className = 'comments__card';
  display.appendChild(card);

  let cardAside = document.createElement("div");
  cardAside.className = 'comments__card-aside';
  card.appendChild(cardAside);

  let avatar = document.createElement("img");
  avatar.className = 'comments__card-aside-avatar';
  cardAside.appendChild(avatar);

  let cardMain = document.createElement("div");
  cardMain.className = 'comments__card-main';
  card.appendChild(cardMain);

  let cardMainTop = document.createElement("div");
  cardMainTop.className = 'comments__card-main-top';
  cardMain.appendChild(cardMainTop);

  let user = document.createElement("p");
  user.innerText = commentObject.name;
  user.className = 'comments__card-main-top-user';
  cardMainTop.appendChild(user);

  let spacer = document.createElement("div")
  spacer.className = 'comments__card-main-top-spacer';
  cardMainTop.appendChild(spacer);

  let date = document.createElement("p");
  date.innerText = commentObject.timestamp;
  date.className = 'comments__card-main-top-date';
  cardMainTop.appendChild(date);

  let message = document.createElement("p");
  message.innerText = commentObject.comment;
  message.className = 'comments__card-main-body';
  cardMain.appendChild(message);
}

function renderComments() {
  
  comments.reverse().forEach((comment) => {
    displayComment(comment);
  });
}

function clearComments() {
  let display = document.querySelector(".comments__display");
  display.innerHTML = "";
}

function now() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return twoDigit(month) + "/" + twoDigit(day) + "/" + year;
}

function twoDigit(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}
