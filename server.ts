import * as express from 'express';

let app = express();

app.use(express.static(__dirname));

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});