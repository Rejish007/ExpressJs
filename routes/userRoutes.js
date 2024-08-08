import express from 'express';
import { getaAllUsers, loginUser } from '../controllers/orderController.js';



const router = express.Router();



router.route('/').get(getaAllUsers);
router.route('/login').post(loginUser);


export default router