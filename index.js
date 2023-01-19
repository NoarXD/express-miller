const express = require('express');
const hbs = require('hbs');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


app.get('/', (request, response) => {
  response.render('home');
});

app.get('/p/:postId', (request, response) => {
  console.log(request.params);
  const { postId } = request.params;
  response.render('postId');
})

app.listen(5656, () => {
  console.log('server start');
});
