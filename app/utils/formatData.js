export const formatAccounts = (accounts) => {

  const formatted = accounts.map((account) => ({
    _id: account._id,
    title: account.title,
    amount: account.amount, // Si nécessaire, convertir ici en nombre ou conserver en chaîne
    description: account.description,
  }));

  return formatted;
};