import * as yup from 'yup';

// eslint-disable-next-line import/prefer-default-export
export const depositStakeFormSchema = yup.object().shape({
  amount: yup
    .number()
    .transform((value) => (Number.isNaN(value) ? 0 : value))
    .min(16, 'Amount must be at least 16 ETH')
    .integer('Amount must be an integer(whole number)')
    .label('Amount'),
});
