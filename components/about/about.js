const aboutRow = document.querySelectorAll(".about__row");
console.log(aboutRow);

function setFlexRow() {
  for (let i = 0; i < aboutRow.length; i++) {
    if (i % 2 === 0) aboutRow.style.flexDirection = "row-reverse";
  }
  console.log("ki");
}

export { aboutRow, setFlexRow };
