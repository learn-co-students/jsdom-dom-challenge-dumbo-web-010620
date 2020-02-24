  
document.addEventListener("DOMContentLoaded", () => {
    
    
    const counter = document.querySelector("#counter")
    let count = setInterval(function () {
        counter.innerText ++; 
    }, 1000); 

    /// DOM Elements 
    const minus = document.querySelector("#minus")
    minus.addEventListener("click", event => {
        counter.innerText --;
    })

    const plus = document.querySelector("#plus")
    plus.addEventListener("click", event => {
        counter.innerText ++;
    })

    const likes = document.querySelector(".likes")
    const heart = document.querySelector("#heart")
    heart.addEventListener("click", event => {
        const newLi = document.createElement("li")
        newLi.innerHTML = `${counter.textContent} has been liked <span>${count}</span> times`
        likes.append(newLi)
    })

});