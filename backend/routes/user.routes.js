import { Router } from "express";


const userRouter = Router();

userRouter.get('/me', (req, res)=>{res.send({title : 'Get user profile'})});

userRouter.get('/all', (req, res)=>{res.send({title : 'Get All Users'})});

userRouter.post('/search', (req, res)=>{res.send({title : 'Search Users'})});

userRouter.delete('/delete/:id', (req, res)=>{res.send({title:  'Delete User'})});

userRouter.put('/update/:id', (req, res)=>res.send({title : 'User updated successfully'}));


export default userRouter;

