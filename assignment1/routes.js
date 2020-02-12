const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Contet-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Users Greeting</title></head>');
        res.write('<body><h1>Hello user!</h1></body>');
        res.write('<form action="/create-user" method="POST"><label>username</label><input type="text" name="message"></input><button type="submit">Create user</button></form>');
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

    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsebody = Buffer.concat(body).toString();
            const username = parsebody.split('=')[1];
            console.log(username);
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</head></title>');
    res.write('<body>Hello Nodejs</body>');
    res.write('</html>');
    res.end();

};

module.exports = {
    handler : requestHandler
};