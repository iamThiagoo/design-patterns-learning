import Loan, { CarLoan, MortgageLoan } from "../Loan";
import InstallmentCalculator, { PriceInstallmentCalculator, SACInstallmentCalculator } from "../use-case/InstallmentCalculator";

export default interface LoanFactory {
	createLoan(amount: number, income: number, installments: number): Loan;
	createInstallmentCalculator(): InstallmentCalculator;
}

export class MortgageLoanFactory implements LoanFactory {
	createLoan(amount: number, income: number, installments: number): MortgageLoan {
		return MortgageLoan.create(amount, income, installments);
	}

	createInstallmentCalculator(): InstallmentCalculator {
		return new SACInstallmentCalculator();
	}
}

export class CarLoanFactory implements LoanFactory {
	createLoan(amount: number, income: number, installments: number): CarLoan {
		return CarLoan.create(amount, income, installments);
	}

	createInstallmentCalculator(): InstallmentCalculator {
		return new PriceInstallmentCalculator();
	}
}