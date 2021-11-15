import express from 'express';
import config from './config.js';
import serverRender from '../renderers/server';
import url from 'url';
import querystring from 'querystring';
import { CharactersController } from './controllers/characters.js';
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    const initialContent = await serverRender(1);
    res.render('index', { ...initialContent });
});

app.get('/characters', async (req, res) => {
    const urlObj = url.parse(req.url);
    const pageNum = querystring.parse(urlObj.query).pageNum;
    const data = await new CharactersController(pageNum).getCharaters();
    res.send(data);
})

app.listen(config.port, () => {
    console.info(`Running on: ${config.port}`);
});