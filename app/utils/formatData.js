/**
 * @description Formate les données des comptes pour l'affichage
 * @info Cette fonction prend un tableau d'objets de comptes et les formate pour l'affichage dans l'application.
 * @param {accounts} accounts Les données des comptes à formater 
 * @returns 
 */

export const formatAccounts = (accounts) => {

  const formatted = accounts.map((account) => ({
    _id: account._id,
    title: account.title,
    amount: account.amount,
    description: account.description,
  }));

  return formatted;
};