document.addEventListener("DOMContentLoaded", (event) => {
  //console.log('Window\'s content fully loaded.')
  let testComment = {
    name: "Miles Acosta",
    timestamp: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  };
  displayComment(testComment)

  let commentForm = document.querySelector(".comments__form");
  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    //console.log("Form Submitted")
    //console.log(event.target[0].value);
    //console.log(event.target[1].value);
    let commentObject = {
      name: event.target[0].value,
      comment: event.target[1].value,
      timestamp: now()
    };
    comments.push(commentObject);
    //console.log(comments)
    console.log(commentObject);
    commentForm.reset();
  });
});

let comments = [
  {
    name: "Connor Walton",
    timestamp: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    timestamp: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    timestamp: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

function displayComment(commentObject) {
    console.log(commentObject);
    let display = document.querySelector('.comments__display');
   
    let container = document.createElement ("div");
    display.appendChild(container);

    let user = document.createElement ("p");
    user.innerText = commentObject.name;
    container.appendChild(user);


    let date = document.createElement ("p");
    date.innerText = commentObject.timestamp;
    container.appendChild(date);


    let paragraph = document.createElement ("p");
    paragraph.innerText = commentObject.comment;
    container.appendChild(paragraph);
}

function now(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    console.log(day);
    return twoDigit(month) + "/" + twoDigit(day) + "/" + year;
}

function twoDigit(number){
    if (number < 10){
        return "0" + number;
    } else {
        return number;
    }
}