const express = require('express');
// const sendMail = require('./mail');
const log = console.log;
const app = express();
const path = require('path');
const router = express.Router();
const PORT = 8080;

// Configuring our data parsing
app.use(express.urlencoded({
    extend: false
}));
app.use(express.json());

app.post('/email', (req, res) => {
    // res.sendFile(path.join(__dirname + '/contact-us.html'));
    //TODO
    //send email here
    const { name, email,message} = req.body;
    console.log('Data: ', req.body);

    // res.json({ message: 'Message received!!!' })
});
const parentDirectoryPath = path.join(__dirname, '..');
router.get('/', function(req, res) {
  res.sendFile(path.join(parentDirectoryPath, 'index.html'));
});

app.listen(PORT, () => log('Server is starting on PORT,', 8080));