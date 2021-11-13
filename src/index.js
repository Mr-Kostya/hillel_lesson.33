import $ from 'jquery';
import Chat from "./Chat";

const talk = new Chat({ onMessage: addLog });
const $log = $('#log');
const $messageInput = $('#message');
const $authorInput = $('#author');

$('#chatForm').on('submit', (e) => {
    e.preventDefault();
    sendMessage();
});

talk.initConnection();

function addLog({ username, message }) {
    const $message = $(`<div>${username}: ${message}:</div>`);
    $message.addClass('message');
    $log.append($message);
}

function sendMessage() {
    talk.send($authorInput.val(), $messageInput.val());
    $messageInput.val('');

}