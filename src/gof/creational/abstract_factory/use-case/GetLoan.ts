import InstallmentRepository from "../repository/InstallmentRepository";
import LoanRepository from "../repository/LoanRepository";
import RepositoryFactory from "../repository/RepositoryFactory";

type Input = {
	loanId: string
}

type Output = {
	amount: number,
	income: number,
	installments: { number: number, amount: number, amortization: number, interest: number, balance: number }[]
}

export default class GetLoan {
	loanRepository: LoanRepository;
	installmentRepository: InstallmentRepository;

	constructor (readonly repositoryFactory: RepositoryFactory) {
		this.loanRepository = repositoryFactory.createLoanRepository();
		this.installmentRepository = repositoryFactory.createInstallmentRepository();
	}

	async execute (input: Input): Promise<Output> {
		const loan = await this.loanRepository.getById(input.loanId);
		const installments = await this.installmentRepository.listByLoanId(input.loanId);
		
		const output: Output = {
			amount: loan.amount,
			income: loan.income,
			installments: []
		}
		
		for (const installment of installments) {
			output.installments.push({
				number: installment.number,
				amount: installment.amount,
				amortization: installment.amortization,
				interest: installment.interest,
				balance: installment.balance
			});
		}

		return output;
	}
}