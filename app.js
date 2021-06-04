let messageBox = document.querySelector('.msgBox');
let words = document.querySelector('.words');
let limit = 100;
words.textContent = 0 + ' / ' + limit;

messageBox.addEventListener('input', () => {
    let typedWords = messageBox.value.length;
    words.textContent = typedWords + ' / ' + limit;
    if (typedWords > limit) {
        messageBox.style.border = '2px solid #ff3838';
        messageBox.style.color = '#ff3838';
    } else {
        messageBox.style.border = '2px solid #ccc';
        messageBox.style.color = '#373737'
    }
});