
function openNav() {
  document.getElementById("nav").style.width = "100%";
}
function closeNav() {
  document.getElementById("nav").style.width = "0%";
}
function openMovies() {
  document.getElementById("movies-menu").style.width = "100%";
}
function closeMovies() {
  document.getElementById("movies-menu").style.width = "0%";
}
function openBooks() {
  document.getElementById("books-menu").style.width = "100%";
}
function closeBooks() {
  document.getElementById("books-menu").style.width = "0%";
}
function openHouse() {
  document.getElementById("house-menu").style.width = "100%";
}
function closeHouse() {
  document.getElementById("house-menu").style.width = "0%";
}
function openSignup() {
  document.getElementById("sign-up").style.display="block";
}
function closeSignup() {
  document.getElementById("sign-up").style.display="none";
}
function openLogin() {
  document.getElementById("have-acc").style.display="block";
}
function closeLogin() {
  document.getElementById("have-acc").style.display="none";
}
//for home page menu
function openChar(){
  if(document.getElementById("characters").style.display==="none"){
    document.getElementById("characters").style.display="grid";
  }
  else{
    document.getElementById("characters").style.display="none";
  }
}
function openMov(){
  if(document.getElementById("movies").style.display==="none"){
    document.getElementById("movies").style.display="grid";
  }
  else{
    document.getElementById("movies").style.display="none";
  }
}
function openBook(){
  if(document.getElementById("books").style.display==="none"){
    document.getElementById("books").style.display="grid";
  }
  else{
    document.getElementById("books").style.display="none";
  }
}
function openHouses(){
  if(document.getElementById("houses").style.display==="none"){
    document.getElementById("houses").style.display="grid";
  }
  else{
    document.getElementById("houses").style.display="none";
  }
}