let section = document.querySelector("section.welcome");
let h1 = document.querySelector("section.welcome h1");
section.addEventListener("click", (e) => {
  h1.innerText = "Have a Good Time!";
});

let button = document.querySelector("button");
let more = document.querySelector("section.more");
button.addEventListener("click", (e) => {
  more.classList.remove("more");
});
