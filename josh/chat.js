const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Store messages in memory for simplicity (in a real app, use a database)
const messages = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/send_message', (req, res) => {
    const message = req.body.message;
    messages.push(message);

    // Simulate a response from the server
    const responseMessage = "Bot: Thanks for your message!";
    messages.push(responseMessage);

    res.json({ status: 'Message sent' });
});

app.get('/get_messages', (req, res) => {
    res.json({ messages: messages });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
