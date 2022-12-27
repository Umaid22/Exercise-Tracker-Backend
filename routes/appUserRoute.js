import express from 'express';
import { createUser, getUserUsingPostReq, getAllUsers, getUserUsingParam, deleteUser, updateUser } from '../controller/exerciseAppController.js';

const router = express.Router();

router.post('/signup', createUser)
router.post('/login', getUserUsingPostReq)

router.get('/allusers', getAllUsers)
router.get('/user/:id', getUserUsingParam)
router.delete('/delete/:id', deleteUser)
router.patch('/update/:id', updateUser)


export default router;