import BankAccount from '../../../../src/gof/behavioral/command/BankAccount';
import { BankAccountRepositoryMemory } from '../../../../src/gof/behavioral/command/repository/BankAccountRepository';
import GetBalance from '../../../../src/gof/behavioral/command/use-case/GetBalance';
import MakeTransfer from '../../../../src/gof/behavioral/command/use-case/MakeTransfer';

test('Deve fazer uma transferência bancária', async function () {
  const bankAccountRepository = new BankAccountRepositoryMemory();
  bankAccountRepository.save(new BankAccount(1));
  bankAccountRepository.save(new BankAccount(2));

  const makeTransfer = new MakeTransfer(bankAccountRepository);
  await makeTransfer.execute({
    fromBankAccountId: 1,
    toBankAccountId: 2,
    amount: 100,
  });

  const getBalance = new GetBalance(bankAccountRepository);
  const outputA = await getBalance.execute(1);
  expect(outputA.balance).toBe(-100);
  const outputB = await getBalance.execute(2);
  expect(outputB.balance).toBe(100);
});
