import express from 'express';
import routes from './routes';

const app = express();

app.use(routes)

const listener:any = app.listen(3333, () => console.log(`Listening on port: ` + listener.address().port))