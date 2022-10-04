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
    const date = new Date();

    return res.status(200).json({"current_time": date.toString().substring(0, date.toString().indexOf('.'))});
});

module.exports = app;
