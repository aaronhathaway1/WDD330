
// When a user clicks anywhere in the window, this function runs
window.addEventListener("click", () => {
    console.log("You knocked?");
});

let button = document.querySelector("button");
  button.addEventListener("click", () => {
    console.log("Button clicked.");
  });