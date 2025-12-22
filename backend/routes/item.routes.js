import { Router } from "express";
import { getAllItems, getItem, getMen, getWomen, searchItem } from "../controllers/item.controller.js";


const itemRouter = Router();

itemRouter.post('/', getAllItems);

itemRouter.get('/men', getMen);

itemRouter.get('/women', getWomen);

itemRouter.post('/search', searchItem);

itemRouter.get('/:id', getItem);



export default itemRouter;
