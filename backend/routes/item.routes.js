import { Router } from "express";
import { getAllItems, getItem, getMen, getWomen, searchItem } from "../controllers/item.controller.js";


const itemRouter = Router();

itemRouter.get('/', getAllItems);

itemRouter.post('/search', searchItem);

itemRouter.get('/:id', getItem);

itemRouter.get('/men', getMen);

itemRouter.get('/women', getWomen);

export default itemRouter;
