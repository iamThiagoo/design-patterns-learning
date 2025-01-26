import BankAccount from '../../../../src/gof/behavioral/command/BankAccount';
import TransferCommand from '../../../../src/gof/behavioral/command/command/TransferCommand';

test('Deve fazer uma transferência entre duas contas', () => {
  const from = new BankAccount(1);
  const to = new BankAccount(2);

  expect(from.getBalance()).toBe(0);
  expect(to.getBalance()).toBe(0);

  from.debit(100);
  to.credit(100);

  expect(from.getBalance()).toBe(-100);
  expect(to.getBalance()).toBe(100);
});

test('Deve fazer uma transferência entre duas contas usando um comando', () => {
  const from = new BankAccount(1);
  const to = new BankAccount(2);

  expect(from.getBalance()).toBe(0);
  expect(to.getBalance()).toBe(0);

  const transferCommmand = new TransferCommand(from, to, 100);
  transferCommmand.execute();

  expect(from.getBalance()).toBe(-100);
  expect(to.getBalance()).toBe(100);
});
