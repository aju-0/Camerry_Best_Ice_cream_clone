window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    if (window.scrollY > 100) { // You can adjust the value to determine when the color change triggers
      header.style.backgroundColor = "#000000"; // New color when scrolled
    } else {
      header.style.backgroundColor = "#0000002b"; // Initial color
    }
  });