const homeSection = document.getElementById("home");
//export default homeSection;
let count = 0;

function setHomeBg() {
  setInterval(function () {
    count++;
    count = count < 47 ? count : 1;
    homeSection.style.backgroundImage = `url(./images/slider/${count}.jpg)`;
  }, 3000);
}

export { homeSection, setHomeBg };
