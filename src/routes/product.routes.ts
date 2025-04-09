import { Router } from 'express';
import { listProducts, createProduct } from '../controllers/product.controller';

const router = Router();
router.get('/', listProducts);
router.post('/', createProduct);

export default router;
