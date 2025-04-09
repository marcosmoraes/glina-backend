import prisma from '../src/config/prisma';

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'admin@glina.com' },
    update: {},
    create: {
      email: 'admin@glina.com',
      password: '$2a$10$XXXXXXXXXXXXXXXXXXXXXXXXXXXXX' // hash de "senha123"
    }
  });

  const product1 = await prisma.product.create({
    data: {
      name: 'Produto Offshore 1',
      description: 'Serviço financeiro em território offshore.'
    }
  });

  const product2 = await prisma.product.create({
    data: {
      name: 'Produto Offshore 2',
      description: 'Investimento internacional privado.'
    }
  });

  console.log({ user, product1, product2 });
}

main().then(() => process.exit(0)).catch(e => {
  console.error(e);
  process.exit(1);
});