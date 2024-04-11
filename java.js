document.addEventListener('DOMContentLoaded', (event) => {
    // JavaScript code can go here
    // For example, to handle form submission:
    document.getElementById('nickname').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            // Do something when enter is pressed
            console.log('Nickname entered:', this.value);
        }
    });
    
});



/* side 2 */

document.addEventListener('DOMContentLoaded', () => {
    const nickname = document.getElementById('choose-body-nickname');
    // Assume you have a function to get the user's nickname
    nickname.textContent = getNickname();

    const bodyOptions = document.querySelectorAll('.choose-body-option');
    bodyOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Add code to mark a chosen body
            selectBodyOption(this);
        });
    });

    document.getElementById('choose-body-confirm-selection').addEventListener('click', () => {
        // Add code to confirm the choice and proceed
        confirmSelection();
    });
});

function getNickname() {
    // Replace with the actual logic to get the user's nickname
    return 'DitNavn'; 
}

function selectBodyOption(selectedOption) {
    // Logic to handle body option selection
    console.log('A body part has been selected', selectedOption);
}

function confirmSelection() {
    // Logic to handle confirmation of selection
    console.log('Selection has been confirmed');
}