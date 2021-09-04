const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
let GREETING_MENTION;

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) GREETING_MENTION = "morning";
  else if (hour >= 12 && hour < 18) GREETING_MENTION = "afternoon";
  else if (hour >= 18 && hour < 22) GREETING_MENTION = "evening";
  else GREETING_MENTION = "night";
  greeting.innerText = `Good ${GREETING_MENTION}, ${username}.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
