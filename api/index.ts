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
    // const date = String(new Date());
    const date = new Date("2015-03-25T12:00:00-06:30");
    // "2015-03-25T12:00:00-06:30"
    console.log("2022-10-02T16:15:47-04:00")
    date.setSeconds(0, 0);
    console.log(date); // Thu Jul 21 2022 12:35:00 GMT+0300
    console.log(date.toISOString()); // Seconds and milliseconds removed from date
    // console.log('date type: ',typeof date);
    // console.log("date split", date.split('.'));
    // console.log("current time", date.substring(0, date.indexOf('.')))
    return res.status(200).json({"current_time": date.toISOString()});
});

module.exports = app;
