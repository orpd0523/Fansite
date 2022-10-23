document.addEventListener("DOMContentLoaded", (event) => {
  renderComments();
  let commentForm = document.querySelector(".comments__form");
  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    //console.log("Form Submitted")
    //console.log(event.target[0].value);
    //console.log(event.target[1].value);
    let commentObject = {
      name: event.target[0].value,
      comment: event.target[1].value,
      timestamp: now(),
    };
    comments.push(commentObject);
    //console.log(comments)
    console.log(commentObject);
    renderComments();
    commentForm.reset();
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

  let container = document.createElement("div");
  container.className = 'comment__container';
  display.appendChild(container);

  let avatar = document.createElement("img");
  avatar.className = 'comment__avatar';
  display.appendChild(avatar);

  let user = document.createElement("p");
  user.innerText = commentObject.name;
  user.className = 'comment__username';
  container.appendChild(user);

  let date = document.createElement("p");
  date.innerText = commentObject.timestamp;
  date.className = 'comment__date';
  container.appendChild(date);

  let paragraph = document.createElement("p");
  paragraph.innerText = commentObject.comment;
  date.className = 'comment__message';
  container.appendChild(paragraph);
}

function renderComments() {
  clearComments();
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
