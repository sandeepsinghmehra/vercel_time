import { createLogger, format, transports } from "winston";
const { timestamp, printf, combine } = format;
import { Request } from 'express';

const logLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  trace: 5,
};

const myFormat = printf(({ timestamp, level, message }) => {
  return `${timestamp} - ${level.toUpperCase()} - ${message}`
});

const _logger = createLogger({
  levels: logLevels,
  format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), myFormat),
  transports: [new transports.Console()],
});

const logger = ((level: string, req: Request, error_name: string, response_status_code: number, response_message: string, stack_trace: string) => {
  _logger.log(
    level,
    `${req.method} - ${req.originalUrl} - ${error_name} - ${response_status_code} - ${response_message}\n\nGenerated At:\n${stack_trace}\n\nHTTP Request Information:\n\tHEADERS: ${JSON.stringify(req.headers)}\n\tPARAMS: ${JSON.stringify(req.params)}\n\tBODY: ${JSON.stringify(req.body)}`);
});

export default logger;
