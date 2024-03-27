function openAndCloseItemInNav(id){
  if(document.getElementById(id).style.width === "100%"){
    document.getElementById(id).style.width = "0%";
  }
  else{
    document.getElementById(id).style.width = "100%";
  }
}
//for home page menu
function openAccordion(id){
  if(document.getElementById(id).style.display==="grid"){
    document.getElementById(id).style.display="none";
  }
  else{
    document.getElementById(id).style.display="grid";
  }
}