import { Request, Response } from 'express';
import prisma from '../config/prisma';

export const listProducts = async (_: Request, res: Response) => {
  const products = await prisma.product.findMany();
  res.json(products);
};

export const createProduct = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  const product = await prisma.product.create({ data: { name, description } });
  res.json(product);
};