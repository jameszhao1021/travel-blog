const express = require('express');
const path = require('path');
const logger = require('morgan');
require('dotenv').config();
require('./config/database');
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(require('./config/checkToken'));



app.use('/api/users', require('./routes/api/users'));
app.use('/api/blogs', require('./routes/api/blogs'));
app.use('/api/profiles', require('./routes/api/profiles'));
app.use('/api/galleries', require('./routes/api/galleries'));
app.use('/api/search', require('./routes/api/searches'));
app.use('/', require('./routes/api/comments'));

// We'll respond to any paths we don't recognise by sending
// the React index.html.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
const port = process.env.PORT || 3001;
app.listen(port, function () {
    console.log(`Express running on http://localhost:${port}`);
});

