let jokeIndex = 0;
const jokeButton = document.getElementById("requestJokeButton");

const jokes = [
  ["If the internet is a boat, where would they park it?", "Google doc."],
  ["What did the zero say to the eight?", "Nice belt!"]
];

const chatContent = document.querySelector(".chat-content");

function appendBotMessage(messageText) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot-message";
  
  const avatar = document.createElement("div");
  avatar.className = "fas fa-robot message-avatar";
  
  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = messageText;
  
  messageDiv.append(avatar, contentDiv);
  chatContent.appendChild(messageDiv);
  
  chatContent.scrollTop = chatContent.scrollHeight;
}

function appendUserMessage() {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message user-message";
  
  const avatar = document.createElement("div");
  avatar.className = "fas fa-smile message-avatar";
  
  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = "Tell me a joke!";
  
  messageDiv.append(avatar, contentDiv);
  chatContent.appendChild(messageDiv);
  
  chatContent.scrollTop = chatContent.scrollHeight;
}

function requestJoke() {
  appendUserMessage();

  setTimeout(function() {
    appendBotMessage("Ok, got one.");
  }, 2000);
  
  setTimeout(function() {
    appendBotMessage(jokes[jokeIndex][0]);
  }, 2500);
  
  setTimeout(function() {
    appendBotMessage(jokes[jokeIndex][1]);
  }, 5000);
  
  jokeIndex++;
  if (jokeIndex >= jokes.length) {
    jokeIndex = 0; 
  }
}

jokeButton.addEventListener("click", requestJoke);


appendBotMessage("Hello! I am Comedian Bot, here to make you laugh. Let me think of a joke.");