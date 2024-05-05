// script.js

// Get references to HTML elements
const promptInput = document.querySelector('#prompt-input');
const responseInput = document.querySelector('#response-input');
const instructorResponse = document.querySelector('#instructor-response');

// Event listener for player's response submission
responseInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        // Simulate instructor's response (you can replace this with API calls)
        const instructorResponseText = generateInstructorResponse(responseInput.value);
        instructorResponse.textContent = `Instructor: ${instructorResponseText}`;

        // Clear player's input
        responseInput.value = '';
    }
});

// Function to generate instructor's response (replace with actual logic)
function generateInstructorResponse(playerResponse) {
    // Example: return a random response from a predefined list
    const possibleResponses = [
        'That\'s interesting!',
        'Great job!',
        'Consider adding more details.',
        'Let\'s explore that further.',
    ];
    const randomIndex = Math.floor(Math.random() * possibleResponses.length);
    return possibleResponses[randomIndex];
}
