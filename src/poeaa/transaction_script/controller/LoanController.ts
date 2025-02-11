import express from 'express';
import LoanService from '../service/LoanService';
const router = express.Router();

router.post('/apply_for_loan', async function (req: any, res: any) {
  const loanService = new LoanService();
  await loanService.applyForLoan(req.body);
  res.end();
});

export default router;
