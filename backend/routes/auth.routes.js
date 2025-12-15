import { Router } from "express";


const authRouter = Router();


authRouter.post('/sign-in', (req, res)=>{res.send({title : 'User signed In successfully'})});

authRouter.post("/sign-up", (req, res)=>{res.send({title : 'User signed up successfully'})});

authRouter.post('/sign-out', (req, res)=>res.send({title : 'User signed out successfully'}));

authRouter.post("/refresh-token", (req, res)=>res.send({title : 'Token refreshed successfully'}));

export default authRouter;

