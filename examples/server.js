import http from "node:http";

// req is who is asking
// rep how we reply
const server = http.createServer( (req, res) => {
    // How do we reply to other apps (mostly for others systems) about the status
    // 200 series is for successfull response
    // 300 series is for data that is no fresh in the browser, meaning cached
    // 400 user messed up
    // 500 server messed up
    res.statusCode = 200
    // This is how you help others systems to understand what type of data is 
    res.setHeader('Content-type', 'text/plain')
    res.end('Hello World!')
})

server.listen(3000, () => {
    console.log('Server running on port 3000');
  });