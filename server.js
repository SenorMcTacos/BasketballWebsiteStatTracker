import path from 'node:path'
import express from 'express'
import {dirname} from 'node:path'

const hostname = '127.0.0.1';
const PORT = 3000;

const app = express()
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile(path.join(dirname, 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});