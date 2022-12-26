import express from 'express';
import { createUser, getUserUsingPostReq, getAllUsers, getUserUsingParam } from '../controller/exerciseAppController.js';

const router = express.Router();

router.post('/login', createUser)
router.post('/userdetails', getUserUsingPostReq)

router.get('/allusers', getAllUsers)
router.get('/user/:id', getUserUsingParam)

export default router;