document.addEventListener('DOMContentLoaded', (event) => {
    //console.log('Window\'s content fully loaded.')
    let commentForm = document.querySelector(".comments__form");
    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        //console.log("Form Submitted")
        //console.log(event.target[0].value);
        //console.log(event.target[1].value);
        let commentObject = {
            username: event.target[0].value,
            comment: event.target[1].value
        };
        console.log(commentObject);
    });
});













