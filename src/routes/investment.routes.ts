import { Router } from 'express';
import { listInvestments, createInvestment } from '../controllers/investment.controller';

const router = Router();
router.get('/', listInvestments);
router.post('/', createInvestment);

export default router;
