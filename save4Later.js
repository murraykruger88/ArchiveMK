//Create empty arrays for:
//saved objects 
let saved = [];
//Comments objects
let comTrop = [];
let comJour = [];
let comTeka = [];
let comKing = [];
//Contact objects
let contactMe = [];

//local storage
function onLoad(){
    //If it's the 1st time that the code has run then save the array to session storage.
    //Set the code 'has run before' to 'true' in session storage.
    if (localStorage.getItem("hasCodeRunBefore") === null) {
        
        localStorage.setItem("Saved", JSON.stringify(saved));
        localStorage.setItem("ComTrop", JSON.stringify(comTrop));
        localStorage.setItem("ComJour", JSON.stringify(comJour));
        localStorage.setItem("ComTeka", JSON.stringify(comTeka));
        localStorage.setItem("ComKing", JSON.stringify(comKing));

        localStorage.setItem("ContactMe", JSON.stringify(contactMe));
        
        localStorage.setItem("hasCodeRunBefore", true);
    }else{
        //SAVED DROPDOWN
        //Get saved array
        let saved = JSON.parse(localStorage.getItem("Saved"));
       
        let dropDownBtn = document.getElementById('myDropdown');
        //Create dropdown content based on saved array content
        saved.forEach(link=>{
            let a = document.createElement('a');
            let linkTitle = document.createTextNode(link.title);
            a.appendChild(linkTitle);
            a.title = link.title;
            a.href = link.href;
            dropDownBtn.appendChild(a);
        });
    }
}

//SAVED ITEM object constructor
function Link(title, href) {
    this.title = title;
    this.href = href;
}

//SAVE FUNCTIONS FOR SAVE ARRAY
function saveKing(){
    let saved = JSON.parse(localStorage.getItem('Saved'));
    let king = new Link('King of the Castle', 'KingOfTheCastle.html'); 
    saved.push(king);
    console.log(saved);
    alert (`You have saved this item to yourfolder. There are now ${saved.length} items your folder`);
    localStorage.setItem("Saved", JSON.stringify(saved));
}

function saveTeka(){
    let saved = JSON.parse(localStorage.getItem('Saved'));
    let teka = new Link('Teka Munyika', 'Teka Munyika.html');  
    saved.push(teka);
    console.log(saved);
    alert (`You have saved this item to your folder. There are now ${saved.length} items your folder`);
    localStorage.setItem("Saved", JSON.stringify(saved));
}

function saveJournal(){
    let saved = JSON.parse(localStorage.getItem('Saved'));
    let journal = new Link('Journal', 'Journal.html'); 
    saved.push(journal);
    console.log(saved);
    alert (`You have saved this item to your folder. There are now ${saved.length} items your folder`);
    localStorage.setItem("Saved", JSON.stringify(saved));
}

function saveTropitone(){
    let saved = JSON.parse(localStorage.getItem('Saved'))
    let tropitone = new Link('Tropitone', 'Tropitone.html'); 
    saved.push(tropitone);
    console.log(saved);
    alert (`You have saved this item to your folder. There are now ${saved.length} items your folder`);
    localStorage.setItem("Saved", JSON.stringify(saved));
}

//DROPDOWN 
function myFunction() {

    document.getElementById("myDropdown").classList.toggle("show");
}
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }