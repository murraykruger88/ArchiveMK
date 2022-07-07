//SAVED ITEM object constructor
function Contact(name, email, phone, message) {
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.message = message;
}

function contact(){
  let contactMe = JSON.parse(localStorage.getItem("ContactMe"));

  let newContact = new Contact(
    document.getElementById("name").value,
    document.getElementById("email").value,
    document.getElementById("phone").value,
    document.getElementById("message").value
    );
  contactMe.push(newContact);
  //set updated 'catalogue' array to session storage
  sessionStorage.setItem("ContactMe", JSON.stringify(contactMe));
}

function consol(){
    let contactMe = JSON.parse(localStorage.getItem("ContactMe"));
    console.log(contactMe);
}consol();