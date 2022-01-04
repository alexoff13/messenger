let selector = document.getElementsByClassName('selector')[0]
let messages = document.getElementsByClassName('window')[0]
let textInput = document.getElementsByClassName('text__input')[0]
let send = document.getElementsByClassName('btn__input')[0]

function scrollMessagesToBottom() {
    messages.scrollTop = messages.scrollHeight
}

function onSend() {
    let message = textInput.value
    if (message) {
        document.getElementsByClassName('window')[0].innerHTML +=
            `<div class="msg"><div class="message__to">${message}</div></div>`
        textInput.value = ''
        scrollMessagesToBottom()
        let reversedMessage = [...message].reverse().join("")
        setTimeout(() => {
            document.getElementsByClassName('window')[0].innerHTML +=
                `<div class="msg"><div class="message__from">${reversedMessage}</div></div>`
            scrollMessagesToBottom()
        }, 2000)

    }
}

scrollMessagesToBottom()

send.addEventListener('click', onSend)