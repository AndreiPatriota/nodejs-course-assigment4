const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const userNames = [];
const port = 3853;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('users-add', { title: 'Add User' });
});

app.post('/users-add', (req, res) => {
  const userName = req.body.name;
  console.log(userName);
  userNames.push(userName);
  res.redirect('/');
});

app.get('/users', (req, res) => {
  res.render('users', { title: 'List of Users', userNames: userNames });
});

app.use((req, res) => {
  res.render('error', { title: 'Error' });
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
