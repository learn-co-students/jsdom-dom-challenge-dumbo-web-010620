document.addEventListener("DOMContentLoaded", () => { 

    // #######DOM Selecting##############
    function $(x) {return document.getElementById(x)};

    let theCounter = $("counter")

    let tempNum = parseInt(theCounter.textContent)

    const theMinus = $("minus")
    const thePlus = $("plus")
    const theHeart = $("heart")
    const thePause = $("pause")

    const commentInput = $("comment-input")
    const commentBox = $("comment-form")

    // creating a UL, appending it to the "#list" div.
    const theList = $("list") 
    const commentList = document.createElement("ul")
    theList.appendChild(commentList)

    // ##############add eventListeners#############
    theMinus.addEventListener("click", event => {
        if (tempNum > 0){
            tempNum -= 1
            theCounter.textContent = tempNum.toString()
        }
    }) // this event listener works.

    thePlus.addEventListener("click", event => {
        tempNum += 1
        theCounter.textContent = tempNum.toString()
    }) // this event listener works.

    commentBox.addEventListener("submit", event => {
        event.preventDefault()

        let newComment = document.createElement("li")
        newComment.textContent = commentInput.value
        // commentList = the "ul".
        commentList.appendChild(newComment)
    })


    // end of the DOMContentLoaded
})