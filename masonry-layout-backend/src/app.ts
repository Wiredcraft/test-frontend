import express, { Express, Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import { StatusCodes } from 'http-status-codes';
import indexRouter from './routes/index';

let app: Express = express();
app.all('', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(StatusCodes.NOT_IMPLEMENTED));
});
app.use(function (error: any, req: Request, res: Response, next: NextFunction) {
  res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR);
  res.json({
    success: false,
    error
  });
});
export default app;
