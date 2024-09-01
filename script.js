const username = localStorage.getItem('username');

function updateUsernameDisplay() {
  const greetingDisplay = document.getElementById('greeting-display');
  if (greetingDisplay) {
    if (window.location.href.includes('greet.html')) {
      greetingDisplay.textContent = `Hello, ${username}!`;
    } else if (window.location.href.includes('message.html')) {
      greetingDisplay.textContent = `Dear, ${username}`;
    } else if (window.location.href.includes('song.html')) {
      greetingDisplay.textContent = `${username}, I want you to listen to this song`;
    }
  }
}

updateUsernameDisplay();