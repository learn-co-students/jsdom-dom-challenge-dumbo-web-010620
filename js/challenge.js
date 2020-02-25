document.addEventListener("DOMContentLoaded", () => {
    
    const counter = document.getElementById("counter")
    let count = setInterval( () => {
        counter.innerText ++;
    }, 1000);
    
    const minus = document.getElementById("minus")
    minus.addEventListener("click", event => {
        counter.innerText --;       
    })

    const plus = document.getElementById("plus")
    plus.addEventListener("click", event => {
        counter.innerText ++;
    })

    const likes = document.querySelector(".likes")
    const heart = document.getElementById("heart")
    heart.addEventListener("click", event => {
        const newLi = document.createElement("li")
            newLi.innerHTML = `${counter.textContent} has been liked <span>${count}</span> times`
            likes.append(newLi)
    })

    const pause = document.getElementById("pause")
    pause.addEventListener("click", event => {
        console.log('please pause')
        // pauses, doesnt not resume
        clearInterval(counter)
    })

    const newComment = document.getElementById('comment-input') 
    const findList = document.getElementById("list")
    const commentForm = document.getElementById('comment-form')
    
    commentForm.addEventListener("submit", event => {
        event.preventDefault()
        
        const newElement = document.createElement("li")
        newElement.textContent = newComment.value
        findList.append(newElement)
    })

})