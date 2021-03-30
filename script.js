const allCommands = [
    {
        command: 'clear',
        result: '',
        elements: '',
    },
    {
        command: 'help',
        result: `Use this command to get your result: <br>
        about contact skill welcome`,
        elements: '',
    },
    {
        command: 'about',
        result: `I'm a super simple and busy person at all, having less time in hand!
        I'm a Tech enthusiast, and love to learn all the new tech stuffs and stacks!
        And trying to do so.`,
        elements: '',
    },
    {
        command: 'contact',
        result: `Hey I'm super glad that you want to contact me! <br>
        Here is my contact info: <br>
        E-mail: <a href="mailto:jubayeramb@gmail.com">jubayeramb@gmail.com</a> <br>
        LinkedIn: <a href="https://www.linkedin.com/in/jubayeramb/"> Jubayer Al Mamun </a> <br>
        Instagram: <a href="https://www.instagram.com/jubayer_amb/"> Jubayer Al Mamun </a> `,
        elements: '',
    },
    {
        command: 'skill',
        result: `I'm a newbie! I'm learning all the new things, I found. And still that's my skill.`,
        elements: '',
    },
    {
        command: 'welcome',
        result: '',
        elements: `                        <h1>Welcome</h1>
                        <h3 class="src-code-font">Myself, Jubayer</h3>
                        <p class="intro src-code-font">
                            Programming Enthusiast, Learner & Self Taught Programmer
                        </p>
                        <p class="text src-code-font">
                            To Learn More About Me, Type a command Below <br>
                        <p class="command-list src-code-font">
                            about contact skill welcome
                        </p>
                        </p>`,
    },
];

let commandList = [];
for (let n = 0; n < allCommands.length; n++) {
    commandList.push(allCommands[n].command);
};

const welcomeScreen = document.querySelector('.welcome-screen');
const preLabelForEmptyCommand = document.querySelector('.label-for-empty-command');
const commandInput = document.querySelector('#command');
const commandResult = document.querySelector('.command-result');


// initial codes for first page load
welcomeScreen.innerHTML = allCommands[5].elements;

// command input keypress event
commandInput.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
        commandExicution();
    }
});

const commandInputLabel = `<label class="command-input-lebel src-code-font">root@jubayer's-portfolio:~$ </label>`;
commandExicution = () => {
    // storing the input command value for 'command' veriable
    let command = String(commandInput.value).toLowerCase().trim();
    // pressing key ENTER without any input command
    if (commandInput.value == '') {
        preLabelForEmptyCommand.innerHTML += commandInputLabel + '<br>';
    } else if (commandInput.value != '') {
        for (let i = 0; i < allCommands.length; i++) {
            // here "allCommnads" is an array defined at the beginning.
            if (command == allCommands[i].command) {
                welcomeScreen.innerHTML = allCommands[i].elements;
                // defining new label for new command
                let preLabelWithCommand = document.createElement('label');
                preLabelWithCommand.classList.add('command-input-label');
                preLabelWithCommand.innerHTML = commandInputLabel + `<span class="green-color"> ${command} </span>`;
                // defining paragraph tag for command result
                let pTagForResult = document.createElement('p');
                pTagForResult.classList.add('result');
                pTagForResult.innerHTML = allCommands[i].result;
                // appending label and result P tag to the commandResult div for each iteration
                commandResult.appendChild(preLabelWithCommand);
                commandResult.appendChild(pTagForResult);
                // clearing the commnand input field
                commandInput.value = '';
            };
        };
        if (command == 'clear' || command == 'welcome') {
            commandResult.innerHTML = '';
            preLabelForEmptyCommand.innerHTML = '';
        };
    };

};
// this snippet is for getiing focused the command input field, clicking the body area
document.body.addEventListener('click', () => {
    commandInput.focus();
});