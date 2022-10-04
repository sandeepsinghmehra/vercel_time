import express, {
    Request,
    Response
} from 'express';

const app = express();
app.use(express.json());

import dotenv from 'dotenv';

dotenv.config();

app.get('/', async (req: Request, res: Response) => {
    console.log("new time:", new Date())
    const currentDate = new Date();

    const current_datetime = currentDate.toISOString().includes('.')? currentDate.toISOString().split('.')[0] + '+00:00': currentDate.toISOString();

    return res.status(200).json({"current_time": current_datetime});
});

module.exports = app;
