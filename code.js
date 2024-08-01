let open = document.querySelector(".icon2");
let close = document.querySelector(".icon1");
let circle = document.querySelector(".circle")
let info = document.querySelector(".info")
let input = document.querySelector(".input")
let search = document.querySelector(".search")

open.addEventListener("click", () => {
  circle.classList.add("turn")
  info.style.marginLeft = "0rem";
})


close.addEventListener("click", () => {
  circle.classList.remove("turn")
  info.style.marginLeft = "-15rem";

})

search.addEventListener("click", () => {
  window.alert(`Sorry but this is all that the search does.your input was "${input.value}"`);
})


