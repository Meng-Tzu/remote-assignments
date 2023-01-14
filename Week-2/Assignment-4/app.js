// Request 1: Click to Change Text.
let section = document.querySelector("section.welcome");
let h1 = document.querySelector("section.welcome h1");
section.addEventListener("click", () => {
  h1.innerText = "Have a Good Time!";
});

// Request 2: Click to Show More Content Boxes.
let button = document.querySelector("button");
let hidden = document.querySelector("section.hidden");
button.addEventListener("click", () => {
  hidden.classList.remove("hidden");
});
