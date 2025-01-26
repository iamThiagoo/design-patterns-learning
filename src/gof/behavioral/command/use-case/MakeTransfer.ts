import TransferCommand from '../command/TransferCommand';
import BankAccountRepository from '../repository/BankAccountRepository';

type Input = {
  fromBankAccountId: number;
  toBankAccountId: number;
  amount: number;
};

export default class MakeTransfer {
  constructor(readonly bankAccountRepository: BankAccountRepository) {}

  async execute(input: Input): Promise<void> {
    const from = await this.bankAccountRepository.getById(
      input.fromBankAccountId,
    );
    const to = await this.bankAccountRepository.getById(input.toBankAccountId);
    const transferCommand = new TransferCommand(from, to, input.amount);
    transferCommand.execute();
    await this.bankAccountRepository.update(from);
    await this.bankAccountRepository.update(to);
  }
}
