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
    return res.status(200).json({"current_time": new Date()});
});

module.exports = app;
