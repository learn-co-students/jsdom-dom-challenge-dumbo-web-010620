// declare var
const minusButton = document.querySelector("#minus");
const plusButton = document.querySelector("#plus");
const likeButton = document.querySelector("#heart");
const pauseButton = document.querySelector("#pause");
let counter = document.querySelector("#counter");

//eventlistener
minusButton.addEventListener("click", decreaseTime);
plusButton.addEventListener("click", increaseTime);
likeButton.addEventListener("click", likeButt);
pauseButton.addEventListener("click", stopTime);
formSubmit.addEventListener("click", formComment);
// counter.addEventListener("click")

//function
function decreaseTime(){
    let number = counter.innerHTML;
    number--;
    counter.innerHTML = number;
    // console.log("Going Downnnnn");
}

function increaseTime(){
    let number = counter.innerHTML;
    number++;
    counter.innerHTML = number;
}

function likeButt(){
    console.log("Liked!!! <3 <3");
}

function stopTime(){
    console.log("You Just stoped the time!!! ");
}

function formComment(){
    const submitButton = document.querySelector("submit");

}