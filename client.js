const msgs = document.getElementById('msgs');
const msgForm = document.getElementById('msgForm');

const socket = io('http://localhost:3000');
socket.on('message', data => {
    console.log(data);
    addMessage(data);
});

msgForm.addEventListener('submit', (e) => {
    e.preventDefault();
    socket.emit('chatmsg', msgForm.msg.value);
    msgForm.msg.value = '';
})

function addMessage(data) {
    const html = `<p>${data}</p>`;
    msgs.innerHTML += html;
}
