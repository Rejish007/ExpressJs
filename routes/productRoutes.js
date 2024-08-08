import express from 'express';
import { getProducts } from '../controllers/productController.js';


const productRouter = express.Router();


productRouter.route('/').get(getProducts);

export default productRouter;