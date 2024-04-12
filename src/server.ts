import dotenv from 'dotenv';
import express, { Express } from 'express';
import { engine } from 'express-handlebars';
import path from 'path';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
