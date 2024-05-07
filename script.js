// index.js

const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');

// Initialize OpenAI API (replace 'YOUR_API_KEY' with your actual API key)
const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

async function sendMessage() {
    const userMessage = userInput.value.trim(); // Trim leading/trailing spaces
    if (!userMessage) {
        return; // Ignore empty messages
    }

    displayMessage(userMessage, true);

    try {
        // Make API request to OpenAI
        const response = await getChatbotResponse(userMessage);
        const instructorResponse = response.choices[0].message.content;
        displayMessage(instructorResponse, false);
    } catch (error) {
        console.error('Error fetching chatbot response:', error.message);
        displayMessage('Oops! Something went wrong. Please try again later.', false);
    }

    userInput.value = ''; // Clear input field
}

async function getChatbotResponse(userMessage) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: 'gpt-4.0-turbo', // Use GPT-4 model
            messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: userMessage }],
        }),
    });

    if (!response.ok) {
        throw new Error('API request failed');
    }

    const data = await response.json();
    return data;
}

function displayMessage(message, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    if (isUser) {
        messageDiv.style.textAlign = 'right';
        messageDiv.style.backgroundColor = '#f0f0f0';
    }
    chatBox.appendChild(messageDiv);
}
