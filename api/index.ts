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
    // const date = new Date("2015-03-25T12:00:00-06:30");
    // // "2015-03-25T12:00:00-06:30"
    // console.log("2022-10-02T16:15:47-04:00")
    // date.setSeconds(0, 0);
    // console.log(date); // Thu Jul 21 2022 12:35:00 GMT+0300
    // console.log(date.toISOString()); // Seconds and milliseconds removed from date
    // console.log('date type: ',typeof date);
    // console.log("date split", date.split('.'));
    // console.log("current time", date.substring(0, date.indexOf('.')))
    const currentDate = new Date();
    const year = currentDate.getUTCFullYear();
    const month = currentDate.getUTCMonth();
    const day = currentDate.getUTCDay();
    const hour = currentDate.getUTCHours();
    const minute = currentDate.getUTCMinutes();
    const seconds = currentDate.getUTCSeconds();
    console.log("2015-03-25T12:00:00-06:30", `${year}-${month}-${day}T${hour}:${minute}:${seconds}+00:00`)
    // const options:any = {year: 'numeric', month: 'numeric', day: 'numeric' };

    // console.log(currentDate.toLocaleDateString('en-us', options));
    return res.status(200).json({"current_time": `${year}-${month}-${day}T${hour}:${minute}:${seconds}+00:00`});
});

module.exports = app;
