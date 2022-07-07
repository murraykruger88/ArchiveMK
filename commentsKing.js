//COMMENTS object constructor
function Comment(text) {
    this.text = text;
}

//ADD COMMENTS FUNCTION
function addKing(){
    let comKing = JSON.parse(localStorage.getItem("ComKing"));
    let newComment = new Comment(
        document.getElementById("text").value
    );
    comKing.push(newComment);
    localStorage.setItem("ComKing", JSON.stringify(comKing));
}

//DISPLAY COMMENTS FUNCTION
function displayKing(){
    let comKing = JSON.parse(localStorage.getItem("ComKing"));
    let kingList = document.getElementById('kingList');
    comKing.forEach(comment=>{
        let commentItem = document.createElement('li'); 
        commentItem.innerHTML += comment.text;
        kingList.appendChild(commentItem);
    });
    console.log(comKing);
}displayKing();