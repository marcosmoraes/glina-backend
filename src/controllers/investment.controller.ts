import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { mockOffshoreTransaction } from '../services/offshore.service';

export const listInvestments = async (_: Request, res: Response) => {
  const investments = await prisma.investment.findMany({
    include: { product: true, user: true }
  });
  res.json(investments);
};

export const createInvestment = async (req: Request, res: Response) => {
  const { userId, productId } = req.body;

  const transaction = await mockOffshoreTransaction(1000, userId);

  if (!transaction.success) {
    return res.status(400).json({ error: 'Transaction failed' });
  }

  const investment = await prisma.investment.create({
    data: {
      userId,
      productId,
      transactionId: transaction.transactionId
    }
  });

  res.status(201).json(investment);
};