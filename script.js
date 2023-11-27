function toggleInfo(section) {
  var container = document.getElementById(section);
  var sectionTitle = document.querySelector("h3[data-section='" + section + "']");
  
  if (container.style.display === "none") {
    container.style.display = "block";
    sectionTitle.parentNode.classList.add("active");
  } else {
    container.style.display = "none";
    sectionTitle.parentNode.classList.remove("active");
  }

  function toggleInfo(infoId) {
    var info = document.getElementById(infoId);
    if (info.style.display === "none") {
      info.style.display = "block";
    } else {
      info.style.display = "none";
    }
  }
  function toggleInfo(infoId) {
    var info = document.getElementById(infoId);
    if (info.style.display === "none") {
      info.style.display = "block";
    } else {
      info.style.display = "none";
    }
  }
}