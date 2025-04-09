// src/server.ts
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

import authRoutes from './routes/auth.routes';
import productRoutes from './routes/product.routes';
import investmentRoutes from './routes/investment.routes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Swagger setup
const swaggerPath = path.join(__dirname, 'docs', 'swagger.yaml');
const swaggerDocument = YAML.load(swaggerPath);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rotas
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/investments', investmentRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📘 Swagger docs available at http://localhost:${PORT}/api-docs`);
});
