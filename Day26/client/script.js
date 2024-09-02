const loginCon = document.getElementById("loginContainer");
const loginBtn = document.getElementById("loginButton");
const userName = document.getElementById("usernameInput");
const chatContainer = document.querySelector("#chats");
const messageList = document.getElementById("msgList");
const sendMsg = document.getElementById("sendButton");
const chatInput = document.getElementById("chatInput");

// let socket = io("http://localhost:3030");

let socket;
let username;

function login (){
    username = userName.value.trim();
    if (username) {
        socket = new WebSocket("http://localhost:3030");

        socket.addEventListener('open', function (e) {
            console.log('Connected to WebSocket server');
            socket.send(JSON.stringify({ type: 'auth', username: username }));
 
            loginCon.style.display = 'none';
            chatContainer.style.display = 'block';
        });

        socket.addEventListener('message', function(e){
            const message = JSON.parse(e.data);
            if (message.type === 'chat'){
                addMessage(messageData.username, messageData.message, false);
            }
        });

        socket.addEventListener('close', function(e){
            console.log('Connection closed');
        });
    }
}

loginBtn.addEventListener("click", login);

function addMessage(username, message, sent){
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sent ? 'sent' : 'received');
    messageElement.innerHTML = `<strong>${username}:</strong> ${message}`;
    messageList.appendChild(messageElement);
    messageList.scrollTop = messageList.scrollHeight;
}

function sendMessage() {
    const message = chatInput.value.trim();
    if (message && socket.readyState === WebSocket.OPEN) {
        const messageData = {
            type: 'chat',
            message: message
        };
        socket.send(JSON.stringify(messageData));
        addMessage(username, message, true);
        chatInput.value = '';
    }
}

sendMsg.addEventListener('click', sendMessage);

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});