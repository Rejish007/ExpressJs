import express from 'express';
import { getaAllUsers, loginUser } from '../controllers/userController.js';
import { notAllowed } from '../utils/shareFunc.js';
import Joi from 'joi';
import expressJoival from 'express-joi-validation';

const validatior = expressJoival.createValidator({});



const router = express.Router();

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

router.route('/').get(getaAllUsers);
router.route('/login').post(validatior.body(loginSchema), loginUser).all(notAllowed);


export default router