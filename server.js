var env = process.env.NODE_ENV || 'development';
console.log('env *** ' , env); 

if(env === 'development') {
    process.env.PORT = 8080;
} else if (env === 'test') {
    process.env.PORT = 8080;
}


const express = require('express');
const path = require('path');

const PORT = process.env.PORT;

const app = express(); 

app.use(express.static(__dirname));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
});

app.listen(PORT);
console.log('Server started');