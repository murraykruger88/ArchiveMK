//COMMENTS object constructor
function Comment(text) {
    this.text = text;
}

//ADD COMMENTS FUNCTION
function addTeka(){
    let comTeka = JSON.parse(localStorage.getItem("ComTeka"));
    let newComment = new Comment(
        document.getElementById("text").value
    );
    comTeka.push(newComment);
    localStorage.setItem("ComTeka", JSON.stringify(comTeka));
}

//DISPLAY COMMENTS FUNCTION
function displayTeka(){
    let comTeka = JSON.parse(localStorage.getItem("ComTeka"));
    let tekaList = document.getElementById('tekaList');
    comTeka.forEach(comment=>{
        let commentItem = document.createElement('li'); 
        commentItem.innerHTML += comment.text;
        tekaList.appendChild(commentItem);
    });
    console.log(comTeka);
}displayTeka();