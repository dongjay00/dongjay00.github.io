const searchEl = document.querySelector(".search");
const searchInputEl = document.querySelector(".search-bar");

searchEl.addEventListener("click", function () {
  if (searchInputEl.classList.contains("hidden"))
    searchInputEl.classList.remove("hidden");
  else searchInputEl.classList.add("hidden");
});

searchInputEl.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const content = event.target.value;
    window.location.href = `http://google.com/search?q=${content}`;
  }
});
