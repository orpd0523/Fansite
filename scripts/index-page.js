const BASE_URL = "http://project-1-api.herokuapp.com/"
const apikey = "?api_key=d10b7838-1997-4fb9-bf66-f0cdd4a312ba"
const display = document.querySelector(".comments__display");
const commentForm = document.querySelector(".comments__form");
let comments = []

document.addEventListener("DOMContentLoaded", (event) => {
  getComments();
  
  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const commentObject = {
      name: event.target[0].value,
      comment: event.target[1].value,
    };

    postComment(commentObject);
    commentForm.reset();
  });
});

function displayComment(commentObject) {
  const card = document.createElement("div");
  card.classList = 'comments__card';
  display.appendChild(card);

  const cardAside = document.createElement("div");
  cardAside.classList = 'comments__card-aside';
  card.appendChild(cardAside);

  const avatar = document.createElement("img");
  avatar.classList = 'comments__card-aside-avatar';
  cardAside.appendChild(avatar);

  const cardMain = document.createElement("div");
  cardMain.classList = 'comments__card-main';
  card.appendChild(cardMain);

  const cardMainTop = document.createElement("div");
  cardMainTop.classList = 'comments__card-main-top';
  cardMain.appendChild(cardMainTop);

  const user = document.createElement("p");
  user.innerText = commentObject.name;
  user.classList = 'comments__card-main-top-user';
  cardMainTop.appendChild(user);

  const spacer = document.createElement("div")
  spacer.classList = 'comments__card-main-top-spacer';
  cardMainTop.appendChild(spacer);

  const date = document.createElement("p");
  date.innerText = commentObject.timestamp;
  date.classList = 'comments__card-main-top-date';
  cardMainTop.appendChild(date);

  const message = document.createElement("p");
  message.innerText = commentObject.comment;
  message.classList = 'comments__card-main-body';
  cardMain.appendChild(message);
}

function renderComments(comments) {
  comments.forEach((comment) => {
    displayComment(comment);
  });
}

function getComments(){
  axios.get(BASE_URL + "comments"+ apikey )
  .then((response) => {
    comments = response.data.sort((a,b)=> b.timestamp - a.timestamp)
    renderComments(comments)
  }); 
}

function postComment(comment){
  axios.post(BASE_URL + "comments"+ apikey, comment)
  .then((response) => {
    comments = [ response.data, ...comments ]
    clearComments(); 
    renderComments(comments)
  });
}

function clearComments() {
  display.innerHTML = "";
}
