export const mockOffshoreTransaction = async (amount: number, userId: string) => {
    console.log(`🔁 Transacionando R$${amount} para o usuário ${userId} via parceiro offshore...`);
    return { success: true, transactionId: Math.random().toString(36).substring(2, 10) };
  };