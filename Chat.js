const socket = io();
const messages = document.getElementById("messages");
const input = document.getElementById("msg");
const button = document.getElementById("send");

button.addEventListener("click", sendMessage);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = input.value.trim();
  if (text) {
    socket.emit("chat message", text);
    input.value = "";
  }
}

socket.on("chat message", (msg) => {
  const p = document.createElement("p");
  p.textContent = msg;
  messages.appendChild(p);
  messages.scrollTop = messages.scrollHeight;
});
