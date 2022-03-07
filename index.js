function getPercentage() {
  percentages = document.querySelectorAll("h2.percentage");
  percentages.forEach(elemento => {
    var valPercentage = elemento.innerHTML;
    elemento.previousElementSibling.firstElementChild.style.width = valPercentage;
  });
};

getPercentage(); 