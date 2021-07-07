document.addEventListener("DOMContentLoaded", () => {
    
    let counter = parseInt(document.querySelector("#counter").innerText)
    setInterval(passingSeconds, 1000)
    let pauseState = "off"

    function passingSeconds() {
        if (pauseState === "off") {
            counter++
            document.querySelector("#counter").innerText = counter 
        }
    }

    // to +/- timer, we need:

    // eventListener on the button (event)
    // a function to run when the event happens (callback)
    // which updates the DOM (Dom manip)

    // so first we need to find the appropriate dom element

    const minusButton = document.querySelector("#minus")
    const plusButton = document.querySelector("#plus")
    const heartButton = document.querySelector("#heart")
    const likes = document.querySelector(".likes")
    const pauseButton = document.querySelector("#pause")

    // const comment = document.querySelector("#list")
    const commentButton = document.querySelector("#submit")
    const commentList = document.querySelector("#comments-list")


    minusButton.addEventListener("click", minus)
    plusButton.addEventListener("click", plus)
    heartButton.addEventListener("click", heart)
    pauseButton.addEventListener("click", pause)
    commentButton.addEventListener("click", addComment)

    function minus() {
        counter--
        document.querySelector("#counter").innerText = counter
    }

    function plus() {
        counter++
        document.querySelector("#counter").innerText = counter
    }

    function heart() {
        if (document.querySelector(`#item${counter}`)) {
            extantLi = document.querySelector(`#item${counter}`)
            extantLi.numOfLikes++
            extantLi.innerText = `${counter} has ${extantLi.numOfLikes} likes`
            console.log(extantLi.numOfLikes)
        }
        else { 
            let numOfLikes = 1

            const newLike = document.createElement("li")
            newLike.innerText = `${counter} has ${numOfLikes} like`
            newLike.id = `item${counter}`
            newLike.numOfLikes = 1
            likes.appendChild(newLike)
        }  
    }

    function pause() {
       if (pauseState === "off") {
           pauseState = "on"
       }
       else { pauseState = "off"}
    }

    function addComment(event) {
        event.preventDefault()
        // console.log(event.target)
        
        const commentText = document.querySelector("#comment-input").value
        const newCommentLi = document.createElement('li')
        newCommentLi.innerText = commentText
        commentList.appendChild(newCommentLi)
        console.log(commentText)

        // let commentInput = 
        document.querySelector("#comment-form").reset()

        // const newCommentText = document.querySelector("#comment-input")
        // newComment.innerText = newCommentText
    }
})