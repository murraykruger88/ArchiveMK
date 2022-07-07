// COMMENTS object constructor
function Comment(text) {
    this.text = text;
}

//ADD COMMENTS FUNCTION
function addJournal(){
    let comJour = JSON.parse(localStorage.getItem("ComJour"));
    let newComment = new Comment(
        document.getElementById("text").value
    );
    comJour.push(newComment);
    localStorage.setItem("ComJour", JSON.stringify(comJour));
}

//DISPLAY COMMENTS FUNCTION
function displayJournal(){
    let comJour = JSON.parse(localStorage.getItem("ComJour"));
    let journalList = document.getElementById('journalList');
    comJour.forEach(comment=>{
        let commentItem = document.createElement('li'); 
        commentItem.innerHTML += comment.text;
        journalList.appendChild(commentItem);
    });
    console.log(comJour);
}displayJournal();