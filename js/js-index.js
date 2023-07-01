const aboutToggle  = document.querySelector("#toggle-button-about");
const aboutContent = document.querySelector("#content-about");

const main = document.querySelector("#main");
const cover = document.getElementById("black-cover");

for (let i = 0; i < 3; i++) {
  const mottoTextList = document.getElementById("motto").children;

  let mottoText = mottoTextList.item(i);
  setTimeout(function(){
    mottoText.classList.add('blur');
  }, ((i+1) *1000));
}

setTimeout(function() {
  cover.style.opacity=0;
  cover.style.zIndex=1;
}, 5000);



aboutToggle.addEventListener("click", function() {
  aboutContent.classList.toggle("is-hidden");
  aboutToggle.classList.toggle("toggle-about-left");

  aboutContent.classList.toggle("animateIn");
  aboutContent.classList.toggle("animateOut");
  
  setTimeout(function() {
    aboutContent.classList.remove("animateIn");
    aboutContent.classList.remove("animateOut");
  }, 500);
});