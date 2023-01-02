import express from 'express';
import { createUser, getUserUsingPostReq, getAllUsers, getUserUsingParam, deleteUser, updateUser } from '../controller/exerciseAppController.js';
import { createActivity, getAllActivity, getSingleActivity } from '../controller/userActivityController.js';

const router = express.Router();

router.post('/signup', createUser)
router.post('/login', getUserUsingPostReq)

router.get('/user', getAllUsers)
// router.get('/user/:id', getUserUsingParam)
// router.delete('/delete/:id', deleteUser)
// router.patch('/update/:id', updateUser)

router.post('/activity/add', createActivity)
router.get('/activity/getall', getAllActivity)
router.get('/activity/:activityname', getSingleActivity)



export default router;