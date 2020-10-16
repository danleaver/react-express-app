// Import express framework
const express = require('express');
const path = require('path');
const http = require("http");

const socketIo = require("socket.io");

// // Import middleware
// const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
// const compression = require('compression')
// const helmet = require('helmet')
// const cors = require('cors')

// // Import routes
// const homeRouter = require('./routes/home-route')
// const usersRouter = require('./routes/users-route')

// Setup default port
const PORT = process.env.PORT || 4000
const port = process.env.PORT || 4001;


// Create express app
const app = express()
const server = http.createServer(app)
const io = socketIo(server); 

// // // Implement middleware
// app.use(cors())
// app.use(helmet())
// app.use(compression())
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser())
// app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'build')));


io.on("connection", (socket) => {
  console.log("connection has been made")
});
  // app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
//     app.get('*', (req, res) => {
//       res.sendFile('build/index.html', { root: __dirname })
//   })
// }

// // Implement route for '/api' endpoint
// app.use('/api', homeRouter)

// // Implement route for '/users' endpoint
// // ! Note:
// // '/users' will prefix all post routes
// // with '/users' => '/all' will become '/users/all'
// app.use('/users', usersRouter)

// Implement route for errors
// app.use((err, req, res, next) => {
//    console.error(err.stack)

//    res.status(500).send('Something broke!')
// })

// Start express app
app.listen(PORT, function() {
  console.log(`Server is running on: ${PORT}`)
})

server.listen(port, () => console.log(`Listening on port ${port}`));