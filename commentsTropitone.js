// COMMENTS object constructor
function Comment(text) {
    this.text = text;
}

//ADD COMMENTS FUNCTION 
function addTropitone(){
    let comTrop = JSON.parse(localStorage.getItem("ComTrop"));
    let newComment = new Comment(
        document.getElementById("text").value
    );
    comTrop.push(newComment);
    localStorage.setItem("ComTrop", JSON.stringify(comTrop));
}

//DISPLAY COMMENTS FUNCTION
function displayTropitone(){
    let comTrop = JSON.parse(localStorage.getItem("ComTrop"));
    let tropitoneList = document.getElementById('tropitoneList');
    comTrop.forEach(comment=>{
        let commentItem = document.createElement('li'); 
        commentItem.innerHTML += comment.text;
        tropitoneList.appendChild(commentItem);
    });
    console.log(comTrop);
}displayTropitone();



