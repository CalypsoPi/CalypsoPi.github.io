const clickSound = new Audio('sounds/click.ogg');
const lvupSound = new Audio('sounds/levelup.ogg');
clickSound.preload = 'auto';
lvupSound.preload = 'auto';

const btnArray = [...document.getElementsByClassName("soundTrigger")];
const submitArray = [...document.getElementsByClassName("submitSndTrigger")];

const btnSound = btnArray.map((btns) => (btns.addEventListener("click", (btnPlay => (clickSound.play())))));

const submitSound = submitArray.map((btns) => (btns.addEventListener("click", (btnPlay => (lvupSound.play())))));

//Get the button
const mybutton = document.getElementById("backTopbtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}