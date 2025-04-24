export const formatAccounts = (accounts) => {
  console.log("Raw accounts before formatting:", accounts); // Log des données brutes
  const formatted = accounts.map((account) => ({
    id: account._id,
    title: account.title,
    amount: account.amount, // Si nécessaire, convertir ici en nombre ou conserver en chaîne
    description: account.description,
  }));
  console.log("Formatted accounts:", formatted); // Log des données formatées
  return formatted;
};