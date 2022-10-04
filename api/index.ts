import express, {
    Request,
    Response
} from 'express';

const app = express();
app.use(express.json());

import dotenv from 'dotenv';

dotenv.config();

app.get('/time-format', async (req: Request, res: Response) => {
    console.log("new time:", new Date())
    const date = String(new Date());
    console.log("current time", date.substring(0, date.indexOf('.')))
    return res.status(200).json({"current_time": date.substring(0, date.indexOf('.'))});
});

module.exports = app;
