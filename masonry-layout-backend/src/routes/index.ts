import express, { Router, Request, Response } from 'express';
import { IIndexData } from '../interfaces';
import getIndexData from '../model/index';

let router: Router = express.Router();
router.get('/', async (request: Request, response: Response) => {
  const indexData: IIndexData[] = await getIndexData();
  response.json({
    success: true,
    data: indexData
  })
});
export default router;
