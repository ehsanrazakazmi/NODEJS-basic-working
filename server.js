import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;


//get current path

const __filename = url.fileURLToPath(import.meta.url);      //gives whole file path
const __dirname = path.dirname(__filename);     //only gives the path without the filename in it
console.log(__filename, __dirname);
const server = http.createServer(async(req,res)=> {
    try {
        // check if GET request
        if (req.method === 'GET') {
            let filePath;
            if (req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html');
            }
            else if (req.url === '/about'){
                filePath = path.join(__dirname, 'public', 'about.html');
            }
            else {
                throw new Error('not found'); 
            }
            const data = await fs.readFile(filePath);
            res.setHeader('Content-Tupe', 'text/html');
            res.write(data);
            res.end();
        }
        else {
            throw new Error('Method not allowed')
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('Server Error');
        
    }
    
});

// app.post('/users', ()=> {})


server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});