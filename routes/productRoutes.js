import express from 'express';
import { getProducts } from '../controllers/productController.js';
import { notAllowed } from '../utils/shareFunc.js';


const productRouter = express.Router();


productRouter.route('/').get(getProducts).all(notAllowed);

export default productRouter;