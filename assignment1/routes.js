
const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Contet-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Users Greeting</title></head>');
        res.write('<body><h1>Hello user!</h1></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/users'){
        res.setHeader('Contet-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Users </title></head>');
        res.write('<body><h1>Users:</h1></body>');
        res.write('<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>');
        res.write('</html>');
        return res.end();
    }

};

module.exports = {
    handler : requestHandler
};