var desktopWidth = window.matchMedia("(min-width: 999px)");
var tabletWidth = window.matchMedia("(min-width: 425px)");
var desktopMaxWidth = window.matchMedia("(max-width: 999px)");
var tabletMaxWidth = window.matchMedia("(max-width: 425px)");
function fromMobileToDesktop(mediaWidth) {
  if (mediaWidth.matches) {
    location.reload();
  }
}
desktopWidth.addEventListener("change", function () {
  fromMobileToDesktop(desktopWidth);
});
tabletWidth.addEventListener("change", function () {
  fromMobileToDesktop(tabletWidth);
});
desktopMaxWidth.addEventListener("change", function () {
  fromMobileToDesktop(desktopMaxWidth);
});
tabletMaxWidth.addEventListener("change", function () {
  fromMobileToDesktop(desktopMaxWidth);
});

// open and close items in nav
function openAndCloseItemInNav(id) {
  if (desktopWidth.matches) {
    if (document.getElementById(id).style.display === "block") {
      document.getElementById(id).style.display = "none";
    }
    else {
      document.getElementById(id).style.display = "block";
    }
  }
  else {
    document.getElementById(id).style.display = "block";
    if (document.getElementById(id).style.width === "100%") {
      document.getElementById(id).style.width = "0%";
      document.getElementById(id).style.display = "none";
    }
    else {
      document.getElementById(id).style.width = "100%";
    }
  }
}
window.onclick = function (event) {
  if (!event.target.matches('.desktopbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
}
//for home page menu
function openAccordion(id) {
  if (document.getElementById(id).style.display === "grid") {
    document.getElementById(id).style.display = "none";
  }
  else {
    document.getElementById(id).style.display = "grid";
  }
}
