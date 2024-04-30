var desktopWidth = window.matchMedia("(min-width: 767px)");
var tabletWidth = window.matchMedia("(min-width: 425px)");
var desktopMaxWidth = window.matchMedia("(max-width: 767px)");
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
//Search
function search() {
  document.getElementById("search-list").style.display = "block";
  if (!desktopWidth.matches) {
    document.getElementById("closeSearch").style.display = "block";
  }
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("search-list");
  li = ul.getElementsByTagName('li');
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
  addEventListener("click", function () {
    closeSearch();
    document.getElementById("closeSearch").style.display = "none";
    document.getElementById("search").value = "";
  });
}
function closeSearch() {
  document.getElementById("search-list").style.display = "none";
}
function saveInput(id) {
  var input = document.getElementById(id).value;
  return input;
}
function addComment() {
  var container = document.getElementById("comments");
  var nameContainer = document.getElementById("names");
  var input = saveInput("comment");
  var name = saveInput("name");
  var newP = document.createElement("p");
  var newName = document.createElement("p");
  if (!(input === "") && !(name === "")) {
    newP.innerHTML = input;
    newName.innerHTML = name;
    container.appendChild(newP);
    nameContainer.appendChild(newName);
    document.getElementById("comment").value = "";
    document.getElementById("name").value = "";
  }
}
