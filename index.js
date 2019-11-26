var express = require('express')
// var path = require('path');

const app = express()
const port = 3001

app.set('view engine', 'ejs');

// app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/style'));
// app.get('/', (req, res) => {
//   res.send('Hello world')
// })

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.listen(port, () => console.log(`Server listening http on ${port}`))

console.log("server running on http://localhost:3005");