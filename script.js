const commandInput = document.querySelector('#command');


document.body.addEventListener('click', () => {
    commandInput.focus();
});


commandInput.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
        commandExicution();
    }
});


commandExicution = () => {
    let command = String(commandInput.value).toLowerCase()
    console.log(command);
    if (command == 'clear') {
        commandInput.vlue = '';
    } else {
        
    }
};